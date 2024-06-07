"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import {
    EmailValidationError,
    validateEmail,
} from "@/lib/validation/validateEmail";
import {
    PasswordValidationError,
    validatePassword,
} from "@/lib/validation/validatePassword";
import { DatabaseError, fromSupabaseError } from "@/lib/error/databaseError";

export async function signup(
    email: string,
    password: string
): Promise<(PasswordValidationError | EmailValidationError | DatabaseError)[]> {
    const supabase = createClient();
    const errors = [];

    errors.push(...validateEmail(email));
    errors.push(...validatePassword(password));

    if (errors.length > 0) {
        return errors;
    }

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return [fromSupabaseError(error)];
    }

    revalidatePath("/", "layout");
    return [];
}
