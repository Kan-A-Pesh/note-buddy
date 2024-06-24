import AuthForm from "@/components/auth/AuthForm";
import { signup } from "./signup.actions";

export default async function SignupPage() {
    return (
        <div>
            <h1>Signup</h1>

            <AuthForm authAction={signup} />
        </div>
    );
}
