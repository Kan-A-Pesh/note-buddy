from transformers import BitsAndBytesConfig
import torch
import os

config = {
    "model": {"device_map": "cuda", "torch_dtype": torch.float16, "quantization": None}
}

# Edit config for low memory devices (> 8GB)
if os.getenv("LOW_MEMORY"):
    config["model"]["quantization"] = BitsAndBytesConfig(
        load_in_8bit=True,
    )

# Edit config for very low memory devices (< 4GB)
if os.getenv("VERY_LOW_MEMORY"):
    config["model"]["quantization"] = BitsAndBytesConfig(
        load_in_4bit=True,
    )

# Edit config for CPU devices
if os.getenv("CPU"):
    config["model"]["device_map"] = "cpu"
