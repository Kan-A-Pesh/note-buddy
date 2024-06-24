"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import PasswordValidationError from "@/shared/errors/validationPassword.errors";
import EmailValidationError from "@/shared/errors/validationEmail.errors";
import validateEmail from "@/shared/validation/validateEmail";
import validatePassword from "@/shared/validation/validatePassword";
import AuthenticationError from "@/shared/errors/authentication.errors";
import parseSupabaseAuthError from "@/lib/error/parseSupabaseAuthError";

export async function signup(
    email: string,
    password: string
): Promise<
    (PasswordValidationError | EmailValidationError | AuthenticationError)[]
> {
    const supabase = createClient();
    const errors = [];

    errors.push(...validateEmail(email));
    errors.push(...validatePassword(password));

    if (errors.length > 0) {
        return errors;
    }

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return [parseSupabaseAuthError(error)];
    }

    revalidatePath("/", "layout");
    return [];
}
