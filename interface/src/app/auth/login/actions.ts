"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { DatabaseError, fromSupabaseError } from "@/lib/error/databaseError";

export async function login(
    email: string,
    password: string
): Promise<DatabaseError[]> {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return [fromSupabaseError(error)];
    }

    revalidatePath("/", "layout");
    return [];
}
