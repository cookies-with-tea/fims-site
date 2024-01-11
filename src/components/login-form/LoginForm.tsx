import { Button } from 'src/ui/button/Button'
import { Input } from 'src/ui/input/Input'
import { Link } from 'react-router-dom'
import { Icon } from 'src/ui/icon/Icon'
import { ChangeEvent, useState } from 'react'
import cnBind from 'classnames/bind'
import style from "src/pages/auth/authForm.module.scss"

const cx = cnBind.bind(style)

interface LoginForm {
    toggleModal: () => void;
}

export const LoginForm = ({ toggleModal }: LoginForm) => {
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
        <>
            <h3 className={cx("auth__title")}>Вход</h3>
            <form className={cx("form")}>
                <div className={cx("form__content")}>
                    <div className={cx("form__item")}>
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
                    </div>

                    <div className={cx("form__item")}>
                        <label className={cx("form__label")}>Пароль</label>
                        <Input 
                            value={formData.password}
                            placeholder='Password'
                            onChange={onValueChange}
                            type='password'
                            name='password'
                        />
                    </div>
                </div>
                
                <div className={cx("form__btn")}>
                    <Button
                        type='submit' 
                        radius='max'
                        className={cx("form__btn-item")}
                        >
                        Войти в аккаунт
                    </Button>
                </div>
                
                <div className={cx("form__possibilities")}>
                    <button 
                        type='button'
                        className={cx("form__forgot-password")} 
                        onClick={() => toggleModal()}
                    >
                        Забыли пароль?
                    </button> 

                    <div className={cx("divider")}></div>

                    <Link to={"/registration"} className={cx("form__link")}>Регистрация</Link>
                </div>

                <div className={cx("form__entrance")}>
                    <div className={cx("form__subtitle")}>
                        Или войти через
                    </div>

                    <div className={cx("form__log-in")}>
                        <Link to={"/"} className={cx("form__icon")}>
                            <Icon name='telegram'/>
                        </Link>

                        <Link to={"/"} className={cx("form__icon")}>
                            <Icon name='google'/>
                        </Link>

                        <Link to={"/"} className={cx("form__icon")}>
                            <Icon name='github'/>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}
