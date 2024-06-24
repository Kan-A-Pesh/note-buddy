"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import AuthenticationError from "@/shared/errors/authentication.errors";
import parseSupabaseAuthError from "@/lib/error/parseSupabaseAuthError";

export async function login(
    email: string,
    password: string
): Promise<AuthenticationError[]> {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return [parseSupabaseAuthError(error)];
    }

    revalidatePath("/", "layout");
    return [];
}
