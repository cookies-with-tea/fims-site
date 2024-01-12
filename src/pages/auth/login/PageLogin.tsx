import { LoginForm } from "src/components/login-form/LoginForm"
import { SendNewPasswordForm } from "src/components/send-email/SendNewPasswordForm"
import { useModal } from "src/hooks/modal/Modal"

export const PageLogin = () => {
    const [visible, changeVisible] = useModal();
    return (
        <>
            <LoginForm handleModalVisibleToggle={changeVisible}/>
            <SendNewPasswordForm visible={visible} onClose={changeVisible}/>
        </>
    )
}
