import { Input, Dialog , Button } from '@/ui'
import { ChangeEvent, useState } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface PropsSendEmail {
    visible: boolean
    onClose: () => void
}

export const SendNewPasswordForm = ({ visible, onClose }: PropsSendEmail) => {
    const [formData, setFormData] = useState('')

    const onClearValue = (): void => {
        setFormData('')
    }
    // DEBT: в дальнешем пересмотреть надобность функции onClearValue
    const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(event.target.value)
    }
    return (
      <Dialog
        closeEscape
        lockScroll
        overlayClosable
        visible={visible}
        title="Восстановление аккаунта"
        className={cx('dialog__content')}
        width={450}
        onClose={onClose}
      >
        <form className={cx('form')}>
          <div className={cx('form__content')}>
            <label className={cx('form__label')}>Почта</label>

            <Input
              name='email'
              className={cx('form__input')}
              placeholder='Email'
              value={formData}
              type='email'
              onChange={onValueChange}
              onClearValue={onClearValue}
            />
          </div>

          <Button
            type="button"
            className={cx('form__btn')}
            onClick={() => onClose()}
          >
            Отправить
          </Button>
        </form>
      </Dialog>
    )
}
