"use client";

import Icon, { IconName } from "./Icon";

interface Props {
    iconName: IconName;
    children: React.ReactNode;
    onClick: () => void;
}

export default function PlaceholderButton({
    iconName,
    children,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="
                flex flex-col items-center justify-center w-32 h-32 gap-2 p-4
                border-dashed border-2 border-gray-700 rounded-2xl text-gray-500 bg-gray-1000
                hover:bg-gray-900 hover:text-gray-400 hover:border-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                transition-colors duration-200 ease-in-out
            "
        >
            <Icon name={iconName} className="w-8 h-8" />
            <span className="text-sm">{children}</span>
        </button>
    );
}
