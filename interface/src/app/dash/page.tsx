"use server";

import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        return (
            <>
                <p>Error: {error?.message ?? "An error occurred"}</p>
                <p>Data: {JSON.stringify(data)}</p>
                <a href="/auth/login">Login</a>
            </>
        );
    }

    return <p>Hello {data.user.email}</p>;
}
