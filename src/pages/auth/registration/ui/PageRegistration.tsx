import { Input, Button, Icon } from '@/ui'
import { useState , ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import style from '@pages/auth/registration/ui/styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const PageRegistration = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        userName:'',
    })

    const onClearValue = (name: string): void => {
        setFormData({ ...formData, [name]:'' })
    }
    // DEBT: в дальнешем пересмотреть надобность функции onClearValue
    const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
      <>
        <h3 className={cx('auth__title')}>Регистрация</h3>

        <form className={cx('form')} onSubmit={(event) => event.preventDefault()}>
          <div className={cx('form__content')}>
            <div className={cx('form__item')}>
              <label className={cx('form__label')}>Почта</label>

              <Input
                placeholder='Email'
                name='email'
                value={formData.email}
                type='email'
                onChange={onValueChange}
                onClearValue={onClearValue}
              />
            </div>

            <div className={cx('form__item')}>
              <label className={cx('form__label')}>Имя</label>

              <Input
                placeholder='Username'
                name='userName'
                value={formData.userName}
                onChange={onValueChange}
                onClearValue={onClearValue}
              />
            </div>

            <div className={cx('form__item')}>
              <label className={cx('form__label')}>Пароль</label>

              <Input
                placeholder='Password'
                name='password'
                value={formData.password}
                type='password'
                clearable={false}
                onChange={onValueChange}
              />
            </div>
          </div>

          <div className={cx('form__btn')}>
            <Button
              type='submit'
              radius='max'
            >
              Создать аккаунт
            </Button>
          </div>

          <div className={cx('form__possibilities')}>
            <span>Есть аккаунт?</span>

            <div className={cx('divider')}></div>

            <Link to={'/login'} className={cx('form__link')}>Войти</Link>
          </div>

          <div className={cx('form__entrance')}>
            <div className={cx('form__subtitle')}>
              Или войти через
            </div>

            <div className={cx('form__log-in')}>
              <Link to={'/'} className={cx('form__icon')}>
                <Icon name='telegram'/>
              </Link>

              <Link to={'/'} className={cx('form__icon')}>
                <Icon name='google'/>
              </Link>

              <Link to={'/'} className={cx('form__icon')}>
                <Icon name='github'/>
              </Link>
            </div>
          </div>
        </form>
      </>
    )
}
