import BaseError from "./error";

export default class CommonError extends BaseError {
    static UNAUTHORIZED = new CommonError("UNAUTHORIZED");
    static FORBIDDEN = new CommonError("FORBIDDEN");
    static INTERNAL_SERVER_ERROR = new CommonError("INTERNAL_SERVER_ERROR");
    static TOO_MANY_REQUESTS = new CommonError("TOO_MANY_REQUESTS");

    private constructor(id: string) {
        super(id, "CommonError");
    }
}
