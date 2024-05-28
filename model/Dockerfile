# Use the official Python base image
FROM pytorch/pytorch:2.3.0-cuda12.1-cudnn8-runtime

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python application code to the container
COPY app.py .
COPY src/ src/

# Set model cache directory
ENV HF_HOME=/app/.cache/huggingface

# Set the entrypoint command to run your Python script
CMD ["python", "app.py"]
