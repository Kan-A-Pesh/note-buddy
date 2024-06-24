export default class BaseError {
    /**
     * Convert an error or array of errors to a exchangeable object
     * @param payload The error or array of errors to serialize
     * @returns An object that can be exchanged between client and server
     */
    static serialize(payload: BaseError[] | BaseError) {
        return JSON.parse(JSON.stringify(payload));
    }

    /**
     * Convert an exchangeable object to an array of errors
     * @param payload The object to deserialize
     * @returns The array of errors
     */
    static deserializeArray(payload: BaseError[]): BaseError[] {
        return payload.map((error) => new BaseError(error.id, error.type));
    }

    /**
     * Convert an exchangeable object to an error
     * @param payload The object to deserialize
     * @returns The error
     */
    static deserialize(payload: BaseError): BaseError {
        return new BaseError(payload.id, payload.type);
    }

    /**
     * The error identifier
     */
    private id: string;

    /**
     * The error type
     */
    private type: string;

    /**
     * Used to identify the object as an error
     */
    public readonly error: boolean = true;

    constructor(id: string, type: string = "BaseError") {
        this.id = id;
        this.type = type;
    }

    public equals(other: BaseError): boolean {
        if (!this.error || !other.error)
            throw new Error("Cannot compare non-errors");

        return this.id === other.id && this.type === other.type;
    }

    /**
     * Get the error identifier
     * @returns The error identifier
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Get the error type
     * @returns The error type
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Get the human-readable error message
     * @returns The human-readable error message
     */
    public getMessage(): string {
        // TODO: Translate error id to human-readable translated message
        return this.id;
    }
}
