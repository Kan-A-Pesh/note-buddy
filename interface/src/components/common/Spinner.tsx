"use client";

import Image from "next/image";

interface Props {
    visible?: boolean;
    backdrop?: boolean;
}

export default function Spinner({ visible = true, backdrop = true }: Props) {
    if (!visible) {
        return null;
    }

    return (
        <div
            className={`absolute inset-0 flex items-center justify-center
                ${backdrop ? "bg-gray-1100 bg-opacity-50" : ""}`}
        >
            <div className="animate-spin text-white" role="status">
                <Image
                    src="/images/spinner.svg"
                    width={24}
                    height={24}
                    role="presentation"
                    alt=""
                />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
