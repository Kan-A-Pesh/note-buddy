"use client";

import PlaceholderButton from "@/components/common/PlaceholderButton";
import Spinner from "@/components/common/Spinner";
import saveFileToServerAction from "@/hooks/saveFileToServerAction";
import useAction from "@/hooks/useAction";
import CommonError from "@/shared/errors/common.errors";
import MidiValidationError from "@/shared/errors/validationMidi.errors";

interface Props {
    createProject: (
        midiData: FormData | null
    ) => Promise<string | (MidiValidationError | CommonError)[]>;
}

export default function ProjectEmpty({ createProject }: Props) {
    const [isLoading, errors, call] = useAction<string>();

    /**
     * Create a new project
     */
    const handleCreateBlankProject = async () => {
        const response = await call(() => createProject(null));

        if (!response) return;

        console.log(response);
    };

    /**
     * Prompt the user to select a MIDI file to import
     * and create a new project from it.
     */
    const handleImportMidiFile = async () => {
        const response = await call(() =>
            saveFileToServerAction(createProject, ".mid,.midi")
        );

        if (!response) return;

        console.log(response);
    };

    return (
        <>
            <div className="border border-gray-800 rounded-lg p-6 m-auto relative overflow-hidden">
                <p className="text-gray-200 mb-4 text-center">
                    Create a new project
                </p>
                <div className="flex gap-4 flex-wrap justify-center items-center">
                    <PlaceholderButton
                        iconName="plus"
                        onClick={handleCreateBlankProject}
                    >
                        Blank project
                    </PlaceholderButton>
                    <PlaceholderButton
                        iconName="file-up"
                        onClick={handleImportMidiFile}
                    >
                        Import a MIDI file
                    </PlaceholderButton>
                </div>

                {errors.map((error, index) => (
                    <p
                        key={index}
                        className="text-primary-300 bg-primary-900 mt-4 text-center p-1 rounded-md"
                    >
                        {error.getMessage()}
                    </p>
                ))}

                <Spinner visible={isLoading} />
            </div>
        </>
    );
}
