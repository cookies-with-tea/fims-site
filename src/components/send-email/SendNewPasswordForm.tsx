import { Dialog } from "src/ui/dialog/Dialog"
import { Input } from "src/ui/input/Input"
import { ChangeEvent, useState } from 'react'
import { Button } from "src/ui/button/Button";

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
                <Dialog onClose={onClose} closeEscape lockScroll>
                    <form className={"form"}>
                        <label className={"form__label"}>Почта или имя</label>
                        <Input 
                            value={formData}
                            placeholder='Email or username'
                            onChange={onValueChange}
                            type='email'
                            onClearValue={onClearValue}
                            clearable
                            name='email'
                        />
                        <Button type="button" onClick={() => onClose()}>jddwmodw</Button>
                    </form>
                </Dialog>)
            }
        </>
    )
}
