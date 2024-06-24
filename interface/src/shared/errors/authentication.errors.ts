import BaseError from "./error";

export default class AuthenticationError extends BaseError {
    static INVALID_CREDENTIALS = new AuthenticationError("INVALID_CREDENTIALS");
    static UNKNOWN = new AuthenticationError("UNKNOWN");

    private constructor(id: string) {
        super(id, "AuthenticationError");
    }
}
