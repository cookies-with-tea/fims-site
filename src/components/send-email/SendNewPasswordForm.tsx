import { Dialog } from "src/ui/dialog/Dialog"
import { Input } from "src/ui/input/input"
import { ChangeEvent, useState } from 'react'

interface PasswordForm {
    show: boolean;
}

export const SendNewPasswordForm = ({ show }: PasswordForm) => {
    const [formData, setFormData] = useState({
        email:"", 
        password:""
    })

    const onClearValue = (name: string): void => {
        setFormData({ ...formData, [name]:"" })
    }
    // DEBT: в дальнешем пересмотреть надобность функции onClearValue
    const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }
    return (
        <Dialog show={show}>
            <form className={"form"}>
                <label className={"form__label"}>Почта или имя</label>
                <Input 
                    value={formData.email}
                    placeholder='Email or username'
                    onChange={onValueChange}
                    type='email'
                    onClearValue={onClearValue}
                    clearable
                    name='email'
                />
            </form>
        </Dialog>
    )
}
