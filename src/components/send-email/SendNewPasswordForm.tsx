import { Dialog } from "src/ui/dialog/Dialog"
import { Input } from "src/ui/input/Input"
import { ChangeEvent, useState } from 'react'
import { Button } from "src/ui/button/Button";
import style from "./sendEmail.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface PropsSendEmail {
    visible: boolean
    onClose: () => void
}

export const SendNewPasswordForm = ({ visible, onClose }: PropsSendEmail) => {
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
            {visible && (
                <Dialog 
                    onClose={onClose} 
                    closeEscape 
                    lockScroll 
                    overlayClosable
                    title="Восстановление аккаунта"
                >
                    <form className={cx("form")}>
                        <div className={cx("form__content")}>
                            <label className={cx("form__label")}>Почта</label>
                            
                            <Input 
                                name='email'
                                className={cx("form__input")}
                                placeholder='Email'
                                value={formData}
                                type='email'
                                onChange={onValueChange}
                                onClearValue={onClearValue}
                                
                            />
                        </div>
                        
                        <Button 
                            type="button" 
                            className={cx("form__btn")}
                            onClick={() => onClose()}
                        >
                            Отправить
                        </Button>
                    </form>
                </Dialog>
                )
            }
        </>
    )
}
