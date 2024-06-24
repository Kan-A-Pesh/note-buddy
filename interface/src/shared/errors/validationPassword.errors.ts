import BaseError from "./error";

export default class PasswordValidationError extends BaseError {
    static TOO_SHORT = new PasswordValidationError("TOO_SHORT");
    static MUST_INCLUDE_NUMBER = new PasswordValidationError(
        "MUST_INCLUDE_NUMBER"
    );
    static MUST_INCLUDE_SPECIAL_CHARACTER = new PasswordValidationError(
        "MUST_INCLUDE_SPECIAL_CHARACTER"
    );
    static MUST_INCLUDE_UPPERCASE_LETTER = new PasswordValidationError(
        "MUST_INCLUDE_UPPERCASE_LETTER"
    );
    static MUST_INCLUDE_LOWERCASE_LETTER = new PasswordValidationError(
        "MUST_INCLUDE_LOWERCASE_LETTER"
    );

    private constructor(id: string) {
        super(id, "PasswordValidationError");
    }
}
