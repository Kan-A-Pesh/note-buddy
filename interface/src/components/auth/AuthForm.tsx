"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthenticationError from "@/shared/errors/authentication.errors";
import EmailValidationError from "@/shared/errors/validationEmail.errors";
import PasswordValidationError from "@/shared/errors/validationPassword.errors";
import { useState } from "react";

interface Props {
    authAction: (
        email: string,
        password: string
    ) => Promise<
        (EmailValidationError | PasswordValidationError | AuthenticationError)[]
    >;
}

export default function AuthForm({ authAction }: Props) {
    const [errors, setErrors] = useState<
        (EmailValidationError | PasswordValidationError | AuthenticationError)[]
    >([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate form data
        const formData = new FormData(event.currentTarget);

        const errors = await authAction(
            (formData.get("email") as string) ?? "",
            (formData.get("password") as string) ?? ""
        );

        // Handle errors
        if (errors.length > 0) {
            setErrors(errors);
            return;
        }

        // Handle success
        console.log("Success");
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.map((error, index) => (
                <div
                    key={index}
                    className="p-1 rounded-lg bg-red-300 text-red-800 text-center border border-red-800 w-full max-w-sm"
                >
                    {error.getMessage()}
                </div>
            ))}

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Email" name="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" placeholder="Password" name="password" />
            </div>
            <Button>Submit</Button>
        </form>
    );
}
