import { Button } from 'src/ui/Button/Button'
import { Input } from 'src/ui/input/input'
import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'
import style from "./Login.module.scss"
import { Icon } from 'src/ui/icon/Icon'

const cx = cnBind.bind(style)

export const PageLogin = () => {
    return (
        <form className={cx("form")}>
            <div className={cx("form__title")}>
                Вход
            </div>

            <div className={cx("form__inner")}>
                <div className={cx("form__item")}>
                    <label className={cx("form__label")}>Почта или имя</label>
                    <Input placeholder='Email or username'/>
                </div>

                <div className={cx("form__item")}>
                    <label className={cx("form__label")}>Пароль</label>
                    <Input 
                        placeholder='Password'
                        type='password'
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
                <div className={cx("form__sabtitle")}>
                    Или войти через
                </div>

                <div className={cx("form__log-in")}>
                    <div className={cx("form__icon")}>
                        <Link to={"/"}>
                            <Icon name='telegram'/>
                        </Link>
                    </div>

                    <div className={cx("form__icon")}>
                        <Link to={"/"}>
                            <Icon name='google'/>

                        </Link>
                    </div>

                    <div className={cx("form__icon")}>
                        <Link to={"/"}>
                            <Icon name='github'/>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
