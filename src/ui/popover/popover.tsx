import { ReactNode, useState } from "react"
import style from "./popover.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface PopoverProps {
    className?: string
    children: ReactNode | string
    content: ReactNode | string
    position?: "top" | "bottom" | "right" | "left"
    trigger?: "hover" | "click"     
}

export const Popover = ({ 
        children,
        content, 
        position = "top",
        className = ""
        // tri
    }: PopoverProps) => {
    
    const [popoverVisible, setPopoverVisible] = useState(false)

    const classes = cx(
        'popover__hidden-text',
        position,
        className
    );
    return (
        <div className={cx("popover")}>
            {popoverVisible && <div className={classes}>{content}</div>} 
            
            <div 
                className="popover" 
                onMouseEnter={() => setPopoverVisible(true)} 
                onMouseLeave={() => setPopoverVisible(false)}
            >
                {children}
            </div>
        </div>
    )
}
