import os

config = {
    "port": 8080,
}

if os.getenv("PORT"):
    config["port"] = int(os.getenv("PORT"))
