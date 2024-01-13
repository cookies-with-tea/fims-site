import { LoginForm } from "src/components/login-form/LoginForm"
import { useModal } from "src/hooks/modal/Modal"

export const PageLogin = () => {
    const [visible, changeVisible] = useModal();
    return (
        <>
            <LoginForm visible={visible} handleModalVisibleToggle={changeVisible}/>
        </>
    )
}
