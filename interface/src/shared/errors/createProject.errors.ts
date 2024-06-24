import BaseError from "./error";

export default class CreateProjectError extends BaseError {
    static NO_MIDI_FILE = new CreateProjectError("NO_MIDI_FILE");
    static MIDI_FILE_TOO_LARGE = new CreateProjectError("MIDI_FILE_TOO_LARGE");
    static INVALID_MIME_TYPE = new CreateProjectError("INVALID_MIME_TYPE");

    private constructor(id: string) {
        super(id, "CreateProjectError");
    }
}
