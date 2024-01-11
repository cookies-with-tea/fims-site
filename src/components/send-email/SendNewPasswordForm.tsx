import { Dialog } from "src/ui/dialog/Dialog"
import { Input } from "src/ui/input/Input"
import { ChangeEvent, useState } from 'react'
import { Button } from "src/ui/button/Button";
import style from "./sendEmail.module.scss"
import { Icon } from "src/ui/icon/Icon";

interface PropsSendEmail {
    show: boolean
    onClose: () => void
}

export const SendNewPasswordForm = ({ show, onClose }: PropsSendEmail) => {
    const [formData, setFormData] = useState("")

    const onClearValue = (): void => {
        setFormData("")
    }
    // DEBT: в дальнешем пересмотреть надобность функции onClearValue
    const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(event.target.value)
    }
    return (
        <>
            {show && (
                <Dialog 
                    onClose={onClose} 
                    // closeEscape 
                    // lockScroll 
                    title="Восстановление аккаунта"
                    closeIcon={<Icon name="close" className={style.form__close}/>}
                    >
                    <form className={style.form}>
                        <label className={style.form__label}>Почта</label>
                        <Input 
                            value={formData}
                            placeholder='Email'
                            onChange={onValueChange}
                            type='email'
                            onClearValue={onClearValue}
                            clearable
                            name='email'
                            className={style.form__input}
                        />
                        <Button type="button" onClick={() => onClose()}>Отправить</Button>
                    </form>
                </Dialog>
                )
            }
        </>
    )
}
