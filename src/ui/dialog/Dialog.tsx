import { ReactNode, useEffect, useRef, MouseEvent, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@ui/icon/Icon'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface DialogProps {
    children?: ReactNode
    closeIcon?: ReactNode | boolean
    title?: string
    onClose?: () => void
    closeEscape?: boolean
    lockScroll?: boolean
    overlayClosable?: boolean
    verticalPosition?: 'flex-start' | 'center' | 'flex-end'
    zIndex?: number
    className?: string
    visible?: boolean
}

export const Dialog = ({
        children,
        title,
        closeEscape,
        onClose,
        lockScroll,
        closeIcon = <Icon name='close' className={cx('modal__close')}/>,
        overlayClosable,
        zIndex = 1000,
        className,
        visible,
        verticalPosition = 'center'
    }: DialogProps) => {

    const [active, setActive] = useState(false)
    const [animation, setAnimation] = useState('')
    const refDialog = useRef<HTMLDivElement>(null)

    const handleEscape = useCallback((event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose?.()
      }
    },[onClose])

    const handleBackgroundClose = ({ target }: MouseEvent) => {
        if(refDialog.current && target && !refDialog.current.contains(target as HTMLDivElement)){
            onClose?.()
        }
    }

    const onTransitionEnd = () => {
        setAnimation(visible ? 'enter-done' : 'exit-done')
        if (!visible) {
            setActive(false)
        }
    }

    useEffect(() => {
        if (visible && closeEscape) {

          document.addEventListener('keydown', handleEscape)

          return () =>  document.removeEventListener('keydown', handleEscape)
        }
    }, [visible, closeEscape, handleEscape])

    useEffect(() => {
        if (visible && lockScroll) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [visible, lockScroll])

    useEffect(() => {
        if (visible) {
            setActive(true)

            setAnimation('enter')

            setTimeout(() => {
                setAnimation('enter-active')
            })

        } else {
            setAnimation('exit')

            setTimeout(() => {
                setAnimation('exit-active')
            })
        }

    }, [visible])

    if (!visible && !active) {
        return null
    }

    return (
        createPortal(
          <div
            className={cx('modal', animation)}
            style={{ zIndex, alignItems: verticalPosition }}
            onTransitionEnd={onTransitionEnd}
            onClick={(event: MouseEvent<HTMLDivElement>) => {
                    if(!overlayClosable) return

                    handleBackgroundClose(event)
            }}
          >
            <div className={cx('modal__overlay')}>
              <div className={cx('modal__content', className)} ref={refDialog}>
                <header className={cx('modal__header')}>
                  <h3 className={cx('modal__title')}>{title}</h3>

                  {closeIcon && (
                    <button type='button' onClick={() => onClose?.()}>
                      {closeIcon}
                    </button>
                                )
                            }
                </header>

                {children}
              </div>
            </div>
          </div>
            , document.body
        )
    )
}
