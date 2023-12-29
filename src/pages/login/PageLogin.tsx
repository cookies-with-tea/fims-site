import { Button } from 'src/ui/Button/Button'
import { Input } from 'src/ui/input/input'
import { Link } from 'react-router-dom'
import { Icon } from 'src/ui/icon/Icon'
import { ChangeEvent, useState } from 'react'
import cnBind from 'classnames/bind'
import style from "./PageLogin.module.scss"

const cx = cnBind.bind(style)

type InputChangeEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

export const PageLogin = () => {
    const [formData, setFormData] = useState({
            email:"", 
            password:""
        })
    
    const onClearValue = (name: string): void => {
        setFormData({ ...formData, [name]:""})
    }

    const onValueChange: InputChangeEventHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }
    return (
        <>
            <h3 className={cx("auth__title")}>Вход</h3>
            <form className={cx("form")}>
                <div className={cx("form__inner")}>
                    <div className={cx("form__item")}>
                        <label className={cx("form__label")}>Почта или имя</label>
                        <Input 
                            value={formData.email}
                            placeholder='Email or username'
                            onChange={onValueChange}
                            onClearValue={onClearValue}
                            // DEBT: в дальнешем пересмотреть надобность функции onClearValue
                            clearable={true}
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
                        >
                        Создать аккаунт
                    </Button>
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
