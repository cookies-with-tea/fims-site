import { LoginForm } from '@components/login-form/LoginForm'
import { useModal } from '@hooks/modal/Modal'

export const PageLogin = () => {
    const [visible, changeVisible] = useModal()
    return (
      <>
        <LoginForm visible={visible} handleModalVisibleToggle={changeVisible}/>
      </>
    )
}
