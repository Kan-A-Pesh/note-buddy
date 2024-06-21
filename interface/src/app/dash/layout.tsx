"use server";

import Sidebar from "@/components/layout/Sidebar";
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

    return (
        <>
            <Sidebar />
            <main className="ml:0 sm:ml-64 grow bg-gray-1000 grid">
                {children}
            </main>
        </>
    );
}
