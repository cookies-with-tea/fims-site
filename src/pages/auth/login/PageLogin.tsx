import { LoginForm} from "@components/login-form/LoginForm.tsx";
import { useModal } from "@hooks/modal/Modal.tsx";

export const PageLogin = () => {
    const [visible, changeVisible] = useModal();
    return (
        <>
            <LoginForm visible={visible} handleModalVisibleToggle={changeVisible}/>
        </>
    )
}
