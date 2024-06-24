import HandleValidationError from "../errors/validationHandle.errors";

export default function validateHandle(
    handle: string
): HandleValidationError[] {
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
