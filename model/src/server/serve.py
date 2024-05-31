from src.config.server import config as server_conf
from websocket_server import WebsocketServer
import json
from datetime import datetime

response_types = {
    "ACK": 0,
    "SUCCESS": 1,
    "ERROR": 2,
    "START": 3,
    "DATA": 4,
    "END": 5,
    "PING": 6,
    "PONG": 7,
    "REQUEST": 8,
}

server = None
callbacks = {
    "new_client": None,
    "client_left": None,
    "message_received": None,
}


def log(client, message):
    print(f"SERVER: ({client['id']}|{client['address']}) {message}")


# Called for every client connecting (after handshake)
def new_client(client, server):
    log(client, "[+] Connected")

    if callbacks["new_client"] is not None:
        callbacks["new_client"](client)


# Called for every client disconnecting
def client_left(client, server):
    log(client, "[-] Disconnected")

    if callbacks["client_left"] is not None:
        callbacks["client_left"](client)


# Called when a client sends a message
def message_received(client, server, message):
    log(client, f"Message received (len: {len(message)})")
    log(client, f"{message}")

    if callbacks["message_received"] is not None:
        callbacks["message_received"](client, message)


def send(client, origin, type, message):
    unix_now = datetime.now().timestamp()
    data = json.dumps(
        {
            "o": origin,
            "t": type,
            "d": unix_now,
            "m": message,
        }
    )

    server.send_message(client, data)


def broadcast(message):
    server.send_message_to_all(message)


def serve(new_client_fn, client_left_fn, message_received_fn):
    global server

    print(f"SERVER: [*] Registering callbacks")
    callbacks["new_client"] = new_client_fn
    callbacks["client_left"] = client_left_fn
    callbacks["message_received"] = message_received_fn

    server = WebsocketServer(port=server_conf["port"])

    server.set_fn_new_client(new_client)
    server.set_fn_client_left(client_left)
    server.set_fn_message_received(message_received)

    print(f"SERVER: [*] Starting server on port {server_conf['port']}")
    server.run_forever()
