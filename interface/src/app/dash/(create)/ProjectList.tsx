"use server";

import type { Database } from "#t/supabase";

interface Props {
    projects: Database["public"]["Tables"]["projects"]["Row"][];
}

export default async function ProjectList({ projects }: Props) {
    return (
        <section>
            <h1 className="text-xl font-bold text-gray-100 mb-4">Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                </div>
            ))}
        </section>
    );
}
