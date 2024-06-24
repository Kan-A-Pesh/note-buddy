import BaseError from "./error";

export default class ClientError extends BaseError {
    static ABORTED = new ClientError("ABORTED");

    private constructor(id: string) {
        super(id, "ClientError");
    }
}
