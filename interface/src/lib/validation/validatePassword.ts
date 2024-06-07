export enum PasswordValidationError {
    TOO_SHORT = "TOO_SHORT",
    MUST_INCLUDE_NUMBER = "MUST_INCLUDE_NUMBER",
    MUST_INCLUDE_SPECIAL_CHARACTER = "MUST_INCLUDE_SPECIAL_CHARACTER",
    MUST_INCLUDE_UPPERCASE_LETTER = "MUST_INCLUDE_UPPERCASE_LETTER",
    MUST_INCLUDE_LOWERCASE_LETTER = "MUST_INCLUDE_LOWERCASE_LETTER",
}

export function validatePassword(password: string): PasswordValidationError[] {
    const errors = [];

    if (password.length < 8) {
        errors.push(PasswordValidationError.TOO_SHORT);
    }

    if (!/\d/.test(password)) {
        errors.push(PasswordValidationError.MUST_INCLUDE_NUMBER);
    }

    if (!/[!@#$%^&*]/.test(password)) {
        errors.push(PasswordValidationError.MUST_INCLUDE_SPECIAL_CHARACTER);
    }

    if (!/[A-Z]/.test(password)) {
        errors.push(PasswordValidationError.MUST_INCLUDE_UPPERCASE_LETTER);
    }

    if (!/[a-z]/.test(password)) {
        errors.push(PasswordValidationError.MUST_INCLUDE_LOWERCASE_LETTER);
    }

    return errors;
}
