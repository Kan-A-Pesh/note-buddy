"use client";

import { useState } from "react";
import Icon from "../common/Icon";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="p-2 flex items-center bg-gray-1000 bg-opacity-50 backdrop-blur-md sticky top-0 z-20 h-16 border-b border-gray-700">
                <Button
                    onClick={() => setIsOpen(true)}
                    className="sm:hidden p-0 w-12 h-12"
                    variant="ghost"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Icon name="menu" className="w-6 h-6" />
                </Button>

                <Avatar className="ml-auto">
                    <AvatarImage
                        src="https://github.com/Kan-A-Pesh.png"
                        alt="@Kan-A-Pesh"
                    />
                    <AvatarFallback>KAP</AvatarFallback>
                </Avatar>
            </nav>

            <div
                className={cn(
                    "fixed inset-0 bg-gray-1100 bg-opacity-50 backdrop-blur-sm sm:hidden z-30 hidden",
                    isOpen && "block"
                )}
                onClick={() => setIsOpen(false)}
            ></div>

            <aside
                className={cn(
                    "fixed top-0 sm:top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
                    isOpen && "translate-x-0"
                )}
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 bg-opacity-50 backdrop-blur-md">
                    <header className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-100">
                            note-buddy
                        </h2>
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="sm:hidden p-2 rounded-md"
                            variant="ghost"
                        >
                            <span className="sr-only">Close sidebar</span>
                            <Icon name="x" className="w-6 h-6 text-gray-500" />
                        </Button>
                    </header>
                </div>
            </aside>
        </>
    );
}
