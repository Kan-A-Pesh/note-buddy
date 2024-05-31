from transformers import AutoModelForCausalLM
from src.config.capacities import config as capacities_conf

model = None


def load_model():
    global model
    model = AutoModelForCausalLM.from_pretrained(
        "m-a-p/ChatMusician",
        torch_dtype=capacities_conf["model"]["torch_dtype"],
        device_map=capacities_conf["model"]["device_map"],
        quantization_config=capacities_conf["model"]["quantization"],
    )


def generate(inputs, eos_token_id, config):
    raw_response = model.generate(
        input_ids=inputs["input_ids"].to(model.device),
        attention_mask=inputs["attention_mask"].to(model.device),
        eos_token_id=eos_token_id,
        generation_config=config,
    )
    return raw_response
