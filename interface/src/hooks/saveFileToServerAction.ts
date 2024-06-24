"use client";

import ClientError from "@/shared/errors/client.errors";
import BaseError from "@/shared/errors/error";

export default async function saveFileToServerAction<T>(
    serverActionFunction: (formData: FormData) => Promise<T | BaseError[]>,
    accept: string
): Promise<T | BaseError[]> {
    return new Promise<T | BaseError[]>((resolve) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = accept;
        fileInput.onchange = () => {
            if (fileInput.files && fileInput.files[0]) {
                const formData = new FormData();
                formData.append(
                    "file",
                    fileInput.files[0],
                    fileInput.files[0].name
                );
                resolve(serverActionFunction(formData));
            }
        };

        const abort = () => {
            fileInput.remove();
            resolve([ClientError.ABORTED]);
        };
        fileInput.onerror = abort;
        fileInput.onabort = abort;
        fileInput.oncancel = abort;

        fileInput.click();
    });
}
