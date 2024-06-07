"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/auth/login");
    }

    return children;
}
