export enum EmailValidationError {
    INVALID_EMAIL = "INVALID_EMAIL",
}

export function validateEmail(email: string): EmailValidationError[] {
    const errors = [];
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email)) {
        errors.push(EmailValidationError.INVALID_EMAIL);
    }

    return errors;
}
