import { Dialog } from "src/ui/dialog/Dialog"



export const SendNewPasswordForm = ({show}) => {
    return (
        <Dialog show={show}>
            {/* <form className="form">
                <label className={cx("form__label")}>Почта или имя</label>
                <Input 
                    value={formData.email}
                    placeholder='Email or username'
                    onChange={onValueChange}
                    type='email'
                    onClearValue={onClearValue}
                    clearable
                    name='email'
                />
            </form> */}
        </Dialog>
    )
}
