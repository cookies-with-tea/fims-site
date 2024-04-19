import { Button , Input, Icon } from '@/ui'
import { SendNewPasswordForm } from '@components/send-email/SendNewPasswordForm'
import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import style from '@pages/auth/registration/ui/styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface LoginForm {
    handleModalVisibleToggle: () => void
    visible: boolean
}

export const LoginForm = ({ handleModalVisibleToggle , visible }: LoginForm) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
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
        <h3 className={cx('auth__title')}>Вход</h3>

        <form className={cx('form')} onSubmit={(event) => event.preventDefault()}>
          <div className={cx('form__content')}>
            <div className={cx('form__item')}>
              <label className={cx('form__label')}>Почта или имя</label>

              <Input
                value={formData.email}
                placeholder='Email or username'
                type='email'
                name='email'
                onChange={onValueChange}
                onClearValue={onClearValue}
              />
            </div>

            <div className={cx('form__item')}>
              <label className={cx('form__label')}>Пароль</label>

              <Input
                name='password'
                type='password'
                value={formData.password}
                placeholder='Password'
                clearable={false}
                onChange={onValueChange}
              />
            </div>
          </div>

          <div className={cx('form__btn')}>
            <Button
              type='submit'
              radius='max'
              className={cx('form__btn-item')}
            >
              Войти в аккаунт
            </Button>
          </div>

          <div className={cx('form__possibilities')}>
            <button
              type='button'
              className={cx('form__forgot-password')}
              onClick={() => handleModalVisibleToggle()}
            >
              Забыли пароль?
            </button>

            <div className={cx('divider')}></div>

            <Link to={'/registration'} className={cx('form__link')}>Регистрация</Link>
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

        <SendNewPasswordForm visible={visible} onClose={handleModalVisibleToggle}/>
      </>
    )
}
