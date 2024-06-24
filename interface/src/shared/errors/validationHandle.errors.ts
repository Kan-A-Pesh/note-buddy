import BaseError from "./error";

export default class HandleValidationError extends BaseError {
    static TOO_SHORT = new HandleValidationError("TOO_SHORT");
    static TOO_LONG = new HandleValidationError("TOO_LONG");
    static INVALID_CHARACTER = new HandleValidationError("INVALID_CHARACTER");
    static MUST_START_WITH_LETTER = new HandleValidationError(
        "MUST_START_WITH_LETTER"
    );

    private constructor(id: string) {
        super(id, "HandleValidationError");
    }
}
