import MidiValidationError from "../errors/validationMidi.errors";

export const MAX_MIDI_FILE_SIZE = 4 * 1024 * 1024; // 4 MB

export function validateMidi(file: File): MidiValidationError[] {
    if (!file) {
        return [MidiValidationError.NO_MIDI_FILE];
    }

    if (file.size > MAX_MIDI_FILE_SIZE) {
        return [MidiValidationError.MIDI_FILE_TOO_LARGE];
    }

    if (!file.type.includes("audio/midi")) {
        return [MidiValidationError.INVALID_MIME_TYPE];
    }

    return [];
}
