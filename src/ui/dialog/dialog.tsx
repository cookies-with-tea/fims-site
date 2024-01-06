import { ReactNode, useEffect } from 'react';
import {createPortal} from 'react-dom';
import style from "./dialog.module.scss"

interface DialogProps {
    children?: ReactNode
    show?: boolean
    title?: string
    closeEscape?: boolean
    onClose?: () => void
}

export const Dialog = ({ 
        children,
        show,
        title,
        closeEscape,
        onClose,
    }: DialogProps) => {
    
    const handleEscape = (event: KeyboardEvent) => {
        if (event.code === 'Escape') {
            onClose?.()
        }
    }

    useEffect(() => {
        closeEscape && document.addEventListener('keydown', handleEscape, {once: true})
    })
    
    return ( 
        <>
            { show && createPortal(
                <>
                    <div className={style.modal}>
                        <div className={style.modal__body}>
                            <div className={style.modal__content}>
                                <div className="modal__header">
                                    <h3 className="modal__title">{title}</h3>
                                    <button type='button' onClick={() => onClose?.()}>ddf33333333</button>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </>, document.body
            )}
        </>
    )
}
