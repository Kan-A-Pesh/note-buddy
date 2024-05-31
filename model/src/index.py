from src.model.prompt import tokenizer, create_prompt, decode_response
from src.model.model import generate, load_model
from src.config.generation import generation_config
from src.helpers.check_gpu import check_gpu
import src.server.serve as server
import src.config.message_type as message_type
import json


def new_client_fn(client):
    server.send(client, origin=None, type=message_type["ACK"], message="🗿")


def message_received_fn(client, message):
    # Client data
    try:
        data = json.loads(message)
    except Exception as e:
        return server.send(
            client,
            origin=None,
            type=server.message_type["ERROR"],
            message="INVALID_MESSAGE_FORMAT",
        )

    try:
        origin = int(data["o"])
    except Exception as e:
        return server.send(
            client,
            origin=None,
            type=server.message_type["ERROR"],
            message="INVALID_ORIGIN",
        )

    try:
        message_type = int(data["t"])
    except Exception as e:
        return server.send(
            client,
            origin=origin,
            type=server.message_type["ERROR"],
            message="INVALID_MESSAGE_TYPE",
        )

    try:
        message_data = data["m"]
    except Exception as e:
        return server.send(
            client,
            origin=origin,
            type=server.message_type["ERROR"],
            message="INVALID_MESSAGE_DATA",
        )

    server.send(client, origin=origin, type=server.message_type["ACK"], message="👍")

    if message_type == server.message_type["PING"]:
        server.send(
            client, origin=origin, type=server.message_type["PONG"], message="🏓"
        )
    elif message_type == server.message_type["REQUEST"]:
        inputs = create_prompt(tokenizer, message_data)
        response = generate(inputs, tokenizer.eos_token_id, generation_config)
        result = decode_response(tokenizer, response, inputs)
        server.send(
            client,
            origin=origin,
            type=server.message_type["DATA"],
            message=result,
        )
    else:
        server.send(
            client,
            origin=origin,
            type=server.message_type["ERROR"],
            message="UNKNOWN_MESSAGE_TYPE",
        )


def run(args):
    # Check available GPU memory
    gpu_memory = check_gpu()
    if gpu_memory is not None:
        gpu_count, current_device, current_name, total, reserved, allocated, free = (
            gpu_memory
        )

        print(
            f"> GPU Memory Information\n"
            f"GPU Count: {gpu_count}\n"
            f"Current Device: {current_device} ({current_name})\n"
            f"Total Memory: {total}B ({total / 1024 ** 3}GB)\n"
            f"Reserved Memory: {reserved}B ({reserved / 1024 ** 3}GB)\n"
            f"Allocated Memory: {allocated}B ({allocated / 1024 ** 3}GB)\n"
            f"Free Memory: {free}B ({free / 1024 ** 3}GB)\n"
        )
    else:
        print("Failed to get GPU memory information")

    load_model()

    server.serve(
        new_client_fn=new_client_fn,
        client_left_fn=None,
        message_received_fn=message_received_fn,
    )
