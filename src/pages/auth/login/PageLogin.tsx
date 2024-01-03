import { LoginForm } from "src/components/login-form/LoginForm"
import { SendNewPasswordForm } from "src/components/send-email/SendNewPasswordForm"

export const PageLogin = () => {
    return (
        <>
            <LoginForm/>
            <SendNewPasswordForm/>
        </>
    )
}
