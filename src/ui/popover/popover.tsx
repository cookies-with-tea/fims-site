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

        const location = {
            // y - вертикальное местоположениие элемента (префиксы)
            // x - горизонтальное местоположениие элемента
            currentX: 0,
            currentY: 0,
            yTop: () => (triggerRect.top + window.scrollY) - tooltipRect.height - 8,
            yBottom: () =>  triggerRect.top + window.scrollY + triggerRect.height + 8,
            xCenter: () => (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2),
            yCenter: () => (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2),
            yLeft: () => triggerRect.x - tooltipRect.width - window.scrollX - 8,
            yRight: () => triggerRect.x + triggerRect.width + window.scrollX + 8,
            vertical(){
                if(position === "top" || position === "bottom"){
                    return this.xCenter()
                } 
            },
            // appendY(a){
            //     this.currentY = a()
            // }
        }
        // location.appendX(location.yTop)
        // console.log(location.currentX)
        if(position === "top") {
            top = location.yTop()
            if(window.scrollY > top) {
                top = location.yBottom();
            }
        } else if(position === "bottom") {
            top = location.yBottom();

            const currentLocation = window.innerHeight - (top - window.scrollY + tooltipRect.height)
            if(currentLocation < 0) {
                top = location.yTop()
            }
        }else if(position === "right") {
            top = location.yCenter()
            const left = location.yRight()
            tooltipRef.current.style.transform = `translate(${left}px, ${top}px)`;
        }else if(position === "left") {
            top = location.yCenter()
            const left = location.yLeft()
            console.log(left)
            tooltipRef.current.style.transform = `translate(${left}px, ${top}px)`;
        }
        
        // console.log(a.left())
        // tooltipRef.current.style.transform = `translate(${location.xCenter()}px, ${top}px)`;
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
