import BaseError from "./error";

export default class EmailValidationError extends BaseError {
    static INVALID_EMAIL = new EmailValidationError("INVALID_EMAIL");

    private constructor(id: string) {
        super(id, "EmailValidationError");
    }
}
