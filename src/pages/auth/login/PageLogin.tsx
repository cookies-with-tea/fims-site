import { LoginForm } from "src/components/login-form/LoginForm"
import { SendNewPasswordForm } from "src/components/send-email/SendNewPasswordForm"
import { useModal } from "src/hooks/modal/modal"

export const PageLogin = () => {
    const [isShowingModal, toggleModal] = useModal();
    console.log(toggleModal)
    return (
        <>
            <LoginForm toggleModal={toggleModal}/>
            <SendNewPasswordForm show={isShowingModal}/>
        </>
    )
}
