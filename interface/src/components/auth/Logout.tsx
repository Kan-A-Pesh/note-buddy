"use client";

import { handleLogout } from "@/lib/auth/handleLogout";

export default function Logout() {
    return (
        <a href="#" onClick={() => handleLogout()}>
            Logout
        </a>
    );
}
