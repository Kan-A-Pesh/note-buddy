import logging
import os

config = {"port": 8080, "loglevel": logging.DEBUG}

if os.getenv("PORT"):
    config["port"] = int(os.getenv("PORT"))
