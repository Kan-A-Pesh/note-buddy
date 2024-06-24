import BaseError from "@/shared/errors/error";
import { useState } from "react";

export default function useAction<T>(): [
    isLoading: boolean,
    errors: BaseError[],
    call: (action: () => Promise<T | BaseError[]>) => Promise<T | null>
] {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<BaseError[]>([]);

    const call = async (action: () => Promise<T | BaseError[]>) => {
        setIsLoading(true);
        const response = await action();
        setIsLoading(false);

        // Check if the response is an array of errors
        if (Array.isArray(response) && response[0]?.error) {
            setErrors(BaseError.deserializeArray(response));
            return null;
        }

        setErrors([]);
        return response as T;
    };

    return [isLoading, errors, call];
}
