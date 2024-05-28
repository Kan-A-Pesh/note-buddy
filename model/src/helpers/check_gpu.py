import torch


def check_gpu():
    if torch.cuda.is_available():
        gpu_count = torch.cuda.device_count()
        current_device = torch.cuda.current_device()
        current_name = torch.cuda.get_device_name(current_device)
        total = torch.cuda.get_device_properties(current_device).total_memory
        reserved = torch.cuda.memory_reserved(current_device)
        allocated = torch.cuda.memory_allocated(current_device)
        free = reserved - allocated  # free inside reserved

        return gpu_count, current_device, current_name, total, reserved, allocated, free
    else:
        return None
