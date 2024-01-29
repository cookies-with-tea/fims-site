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
        const location = {
            // y - вертикальное местоположениие элемента (префиксы)
            // x - горизонтальное местоположениие элемента
            currentX: 0,
            currentY: 0,
            yTop: () => (triggerRect.top + window.scrollY) - tooltipRect.height - 8,
            yBottom: () =>  triggerRect.top + window.scrollY + triggerRect.height + 8,
            xLeft: () => triggerRect.x - tooltipRect.width - window.scrollX - 8,
            xRight: () => triggerRect.x + triggerRect.width + window.scrollX + 8,
            center() {
                if(position === "top" || position === "bottom"){
                    return this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
                } else{
                    return this.currentY = triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2
                }
            },
            changeVertical(verticalLocation: () => number): void {
                this.center()
                this.currentY = verticalLocation()
            },
            changeHorizontal(horizontalLocation: () => number): void {
                this.center()
                this.currentX = horizontalLocation()
            }
        }

        if(position === "top") {
            location.changeVertical(location.yTop)
            if(window.scrollY > location.currentY) location.changeVertical(location.yBottom)

        } else if(position === "bottom") {
            location.changeVertical(location.yBottom)

            const currentLocation = window.innerHeight - (location.currentY- window.scrollY + tooltipRect.height)
            if(currentLocation < 0) location.changeVertical(location.yTop)
        } else if(position === "right") {
            location.changeHorizontal(location.xRight)
        } else if(position === "left") {
            location.changeHorizontal(location.xLeft)
        }
        
        tooltipRef.current.style.transform = `translate(${location.currentX}px, ${location.currentY}px)`;
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
