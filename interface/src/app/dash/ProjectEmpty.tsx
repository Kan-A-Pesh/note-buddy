"use client";

import PlaceholderButton from "@/components/common/PlaceholderButton";

export default function ProjectEmpty() {
    return (
        <>
            <div className="border border-gray-800 rounded-lg p-6 m-auto">
                <p className="text-gray-200 mb-4 text-center">
                    Create a new project
                </p>
                <div className="flex gap-4 flex-wrap justify-center items-center">
                    <PlaceholderButton iconName="plus" onClick={() => {}}>
                        Blank project
                    </PlaceholderButton>
                    <PlaceholderButton iconName="file-up" onClick={() => {}}>
                        Import a MIDI file
                    </PlaceholderButton>
                </div>
            </div>
        </>
    );
}
