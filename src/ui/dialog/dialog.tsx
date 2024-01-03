import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import style from "./dialog.module.scss"

interface DialogProps{
    children?: ReactNode
    show?: boolean
}

export const Dialog = ({ 
        children,
        show,
    }: DialogProps) => {

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={style.modal}>
            <div className={style.modal__body}>
                <div className={style.modal__content}>
                    11111111111111111111111111111
                    {children}
                </div>
            </div>
        </div>
        , document.body
    )
}
