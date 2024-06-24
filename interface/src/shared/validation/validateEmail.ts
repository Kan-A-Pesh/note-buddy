import EmailValidationError from "../errors/validationEmail.errors";

export default function validateEmail(email: string): EmailValidationError[] {
    const errors = [];
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email)) {
        errors.push(EmailValidationError.INVALID_EMAIL);
    }

    return errors;
}
