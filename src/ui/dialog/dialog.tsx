import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from "./dialog.module.scss"

interface DialogProps{
    children?: ReactNode
    show?: boolean
    title?: string
    closeEscape?: boolean
}

export const Dialog = ({ 
        children,
        show,
        title,
        closeEscape,
    }: DialogProps) => {

    
    
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                console.log(false)
            }
        }

        if(closeEscape){
            document.addEventListener('keydown', handleEscape)
            return () => document.removeEventListener('keydown', handleEscape)
        }
    })
    

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={style.modal}>
            <div className={style.modal__body}>
                <div className={style.modal__content}>
                    <div className="modal__header">
                        <h3 className="modal__title">{title}</h3>
                    </div>
                    {children}
                </div>
            </div>
        </div>
        , document.body
    )
}
