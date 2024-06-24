import AuthenticationError from "@/shared/errors/authentication.errors";

export default function parseSupabaseAuthError(
    error: Error
): AuthenticationError {
    switch (error.message.toLowerCase()) {
        case "invalid login credentials":
            return AuthenticationError.INVALID_CREDENTIALS;
        default:
            break;
    }

    return AuthenticationError.UNKNOWN;
}
