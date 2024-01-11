import { ReactNode, useEffect } from 'react';
import {createPortal} from 'react-dom';
import style from "./dialog.module.scss"
// import { Icon } from '../icon/Icon';

interface DialogProps {
    children?: ReactNode
    closeIcon?: ReactNode
    title?: string
    onClose?: () => void
    closeEscape?: boolean
    lockScroll?: boolean
}

export const Dialog = ({ 
        children,
        title,
        closeEscape,
        onClose,
        lockScroll,
        closeIcon
    }: DialogProps) => {
    
    const handleEscape = (event: KeyboardEvent) => {
        if (event.code === 'Escape') {
            onClose?.()
        }
    }

    useEffect(() => {
        closeEscape && document.addEventListener('keydown', handleEscape, {once: true})
    }, [closeEscape])

    useEffect(() => {
        lockScroll ? document.body.style.overflowY = 'hidden': document.body.style.overflowY = 'auto';
    }, [lockScroll]);

    return (createPortal(
                <div className={style.modal}>
                    <div className={style.modal__body}>
                        <div className={style.modal__content}>
                            <div className={style.modal__header}>
                                <h3 className={style.modal__title}>{title}</h3>
                                <button type='button' onClick={() => onClose?.()}>
                                    {closeIcon}
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            , document.body
        )
    )
}
