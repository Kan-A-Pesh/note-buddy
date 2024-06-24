"use server";

import { projectNameGenerator } from "@/lib/generators/projectNameGenerator";
import CommonError from "@/shared/errors/common.errors";
import BaseError from "@/shared/errors/error";
import MidiValidationError from "@/shared/errors/validationMidi.errors";
import { validateMidi } from "@/shared/validation/validateMidi";
import { Midi } from "@tonejs/midi";

/**
 * Create a new project.
 *
 * @param midiData The MIDI data to create the project from.
 * @returns The ID of the newly created project or null if the project could not be created.
 */
export async function createProject(
    midiData: FormData | null
): Promise<string | (MidiValidationError | CommonError)[]> {
    let projectName = projectNameGenerator();

    // Validate the MIDI data
    if (midiData) {
        const midiFile = midiData.get("file") as File;
        const validationErrors = validateMidi(midiFile);

        if (validationErrors.length > 0) {
            return BaseError.serialize(validationErrors);
        }

        const midi = new Midi(await midiFile.arrayBuffer());

        projectName = midi.name;
    }

    return "new-project-id";
}
