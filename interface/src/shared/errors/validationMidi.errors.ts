import BaseError from "./error";

export default class MidiValidationError extends BaseError {
    static NO_MIDI_FILE = new MidiValidationError("NO_MIDI_FILE");
    static MIDI_FILE_TOO_LARGE = new MidiValidationError("MIDI_FILE_TOO_LARGE");
    static INVALID_MIME_TYPE = new MidiValidationError("INVALID_MIME_TYPE");

    private constructor(id: string) {
        super(id, "MidiValidationError");
    }
}
