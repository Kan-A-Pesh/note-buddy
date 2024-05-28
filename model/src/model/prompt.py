from string import Template
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("m-a-p/ChatMusician", trust_remote_code=True)


def get_prompt_template():
    return Template("Human: ${inst} </s> Assistant: ")


def create_prompt(tokenizer, instruction):
    prompt = get_prompt_template().safe_substitute({"inst": instruction})
    inputs = tokenizer(prompt, return_tensors="pt", add_special_tokens=False)
    return inputs


def decode_response(tokenizer, response, inputs):
    response = tokenizer.decode(
        response[0][inputs["input_ids"].shape[1] :], skip_special_tokens=True
    )
    return response
