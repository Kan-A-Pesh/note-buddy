"use server";

import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import ProjectEmpty from "./(create)/ProjectEmpty";
import ProjectList from "./(create)/ProjectList";
import { createProject } from "./(create)/createProject.actions";

export default async function PrivatePage() {
    const supabase = createClient();

    const userProjects = await supabase.from("projects").select("*");

    if (userProjects.error) {
        return <div>{userProjects.error.message}</div>;
    }

    return (
        <div className="p-4 h-full flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
                {!userProjects.data || userProjects.data.length === 0 ? (
                    <ProjectEmpty createProject={createProject} />
                ) : (
                    <ProjectList projects={userProjects.data} />
                )}
            </Suspense>
        </div>
    );
}
