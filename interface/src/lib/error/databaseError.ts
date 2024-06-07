export enum DatabaseError {
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    UNKNOWN = "UNKNOWN",
}

export function fromSupabaseError(error: Error): DatabaseError {
    console.log(error.message);

    switch (error.message.toLowerCase()) {
        case "invalid login credentials":
            return DatabaseError.INVALID_CREDENTIALS;
        default:
            break;
    }

    return DatabaseError.UNKNOWN;
}
