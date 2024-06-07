export enum HandleValidationError {
    TOO_SHORT = "TOO_SHORT",
    TOO_LONG = "TOO_LONG",
    INVALID_CHARACTER = "INVALID_CHARACTER",
    MUST_START_WITH_LETTER = "MUST_START_WITH_LETTER",
}

export function validateHandle(handle: string): HandleValidationError[] {
    const errors = [];

    if (handle.length < 3) {
        errors.push(HandleValidationError.TOO_SHORT);
    }

    if (handle.length > 25) {
        errors.push(HandleValidationError.TOO_LONG);
    }

    if (!/^[a-zA-Z0-9_]+$/.test(handle)) {
        errors.push(HandleValidationError.INVALID_CHARACTER);
    }

    if (!/^[a-zA-Z]/.test(handle)) {
        errors.push(HandleValidationError.MUST_START_WITH_LETTER);
    }

    return errors;
}
