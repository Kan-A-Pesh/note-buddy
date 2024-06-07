"use server";

import Logout from "@/components/auth/Logout";

export default async function Home() {
    return (
        <main>
            <h1>Home</h1>
            <a href="/auth/login">Login</a>
            <span> | </span>
            <a href="/auth/signup">Signup</a>
            <span> | </span>
            <a href="/dash">Private</a>
            <span> | </span>
            <Logout />
        </main>
    );
}
