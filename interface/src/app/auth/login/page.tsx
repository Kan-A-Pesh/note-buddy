import AuthForm from "@/components/auth/AuthForm";
import { login } from "./actions";

export default async function LoginPage() {
    return (
        <div>
            <h1>Login</h1>

            <AuthForm authAction={login} />
        </div>
    );
}
