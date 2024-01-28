import { ReactNode, useRef, useState, useEffect } from "react"
import {createPortal} from 'react-dom';
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
        position,
        className = "",
        trigger
    }: PopoverProps) => {
    const [popoverVisible, setPopoverVisible] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null);

    // event: MouseEvent<HTMLDivElement>
    const onClick = () => {
        setPopoverVisible(!popoverVisible)
    }
    useEffect(() => {
        if (!popoverVisible || !triggerRef.current || !tooltipRef.current) {
            return;
        }
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        let top;
        let left
        if(position === "top") {
            top = (triggerRect.top + window.scrollY) - tooltipRect.height - 8
            if(window.scrollY > top) {
                top = triggerRect.top + window.scrollY + triggerRect.height + 8;
            }
            left = triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2;

        } else if(position === "bottom") {
            // top = (triggerRect.top + window.scrollY) + triggerRect.height + 8;
            top = (triggerRect.top + window.scrollY) + triggerRect.height + 8;
            const currentLocation = window.innerHeight - (top - window.scrollY + tooltipRect.height)
            if(currentLocation < 0) {
                top = (triggerRect.top + window.scrollY) - tooltipRect.height - 8
            }
            left = triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2;

        }else if(position === "right"){
            // error
            top = triggerRect.top + window.scrollY + triggerRect.height + 8;
            left = triggerRect.left + triggerRect.width + window.scrollX + 8;
        }
        console.log(window.innerHeight)
        console.log(`${top} - top` )
        console.log(`${window.scrollY} - скролл` )
        // x - положение относительно горизонтали (слева)
        // y - положение относительно вертикали (с верху)

        console.log(triggerRef.current.getBoundingClientRect())
        console.log(tooltipRef.current.getBoundingClientRect())
    
        tooltipRef.current.style.transform = `translate(${left}px, ${top}px)`;
    }, [popoverVisible, triggerRef, tooltipRef, position]);

    const classes = cx(
        'popover__hidden-text',
        // position,
        className
    );

    return (
        <div className={cx("popover")}>
            {popoverVisible && createPortal(
                <div 
                    className={classes}
                    ref={tooltipRef}
                >
                    {content}
                </div>, 
                document.body)
            } 
            
            <div 
                className="popover__content" 
                ref={triggerRef}
                onClick={() => trigger === "click" && onClick()}
                onMouseEnter={() => trigger === "hover" && setPopoverVisible(true)} 
                onMouseLeave={() => trigger === "hover" && setPopoverVisible(false)}
            >
                {children}
            </div>
        </div>
    )
}
