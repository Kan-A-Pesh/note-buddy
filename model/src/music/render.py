from symusic import Score, Synthesizer, BuiltInSF3, dump_wav
import re
import torch
import torchaudio


def render_wav(response, path):
    abc_pattern = r"(X:\d+\n(?:[^\n]*\n)+)"
    abc_notation = re.findall(abc_pattern, response + "\n")[0]
    s = Score.from_abc(abc_notation)
    audio = Synthesizer().render(s, stereo=True)
    torchaudio.save(path, torch.FloatTensor(audio), 44100)
