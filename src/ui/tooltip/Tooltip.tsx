import { ReactNode, useRef, useState, useEffect} from "react"
import {createPortal} from 'react-dom';
import style from "./tooltip.module.scss"
import cnBind from 'classnames/bind'
const cx = cnBind.bind(style)

interface PopoverProps {
    className?: string
    children?: ReactNode
    content?: ReactNode
    offsetX?: number    
    offsetY?: number    
    placement?: "top" | "bottom" | "right" | "left"
    trigger?: "hover" | "click" 
    clickOutside?: boolean
    teleportTarget?: HTMLElement
    arrow?: boolean
}

export const Tooltip = ({ 
        children,
        content, 
        teleportTarget = document.body,
        placement = "bottom",
        className = "",
        offsetX = 10,
        offsetY = 10,
        trigger = "hover",
        clickOutside = true,
        arrow = false
    }: PopoverProps) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const [positionArrow, setPositionArrow] = useState(placement)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null);

    const onClick = () => {
        setTooltipVisible(!tooltipVisible)
    }

    useEffect(() => {
        function handlerOutsideClick(event) {
            if (!triggerRef.current?.contains(event.target) && 
                !tooltipRef.current?.contains(event.target)) {
                setTooltipVisible(!tooltipVisible);
            }
        }
        
        if(tooltipVisible && clickOutside) {
            window.addEventListener('click', handlerOutsideClick)

            return () => window.addEventListener('click', handlerOutsideClick)
        } 
    }, [tooltipVisible, clickOutside]);

    // DEBT: Добавить анимацию при появление/скрытие 
    useEffect(() => {
        if (!tooltipVisible || !triggerRef.current || !tooltipRef.current) {
            return;
        }
        
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        const positions = {
            currentX: 0,
            currentY: 0,
            yTop: () => (triggerRect.top + window.scrollY) - tooltipRect.height - offsetY,
            yBottom: () =>  triggerRect.top + window.scrollY + triggerRect.height + offsetY,
            xLeft: () => triggerRect.x - tooltipRect.width - window.scrollX - offsetX,
            xRight: () => triggerRect.x + triggerRect.width + window.scrollX + offsetX,
            center() {
                if(placement === "top" || placement === "bottom") {
                    this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
                } else {
                    this.currentY = (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2)
                }
            },
            changeVerticalPosition(verticalPosition: () => number): void {
                this.center()
                this.currentY = verticalPosition()
            },
            changeHorizontalPosition(horizontalPosition: () => number): void {
                this.center()
                this.currentX = horizontalPosition()
            }
        }
        
        switch (placement) {
            case "top":
                positions.changeVerticalPosition(positions.yTop)
                
                if(window.scrollY > positions.currentY) {
                    positions.changeVerticalPosition(positions.yBottom)
                    setPositionArrow("bottom")
                    break
                } 

                setPositionArrow("top")
                break;

            case "bottom": {
                positions.changeVerticalPosition(positions.yBottom)

                const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)

                if(currentpositions < 0) {
                    positions.changeVerticalPosition(positions.yTop)
                    setPositionArrow("top")
                    break
                } 

                setPositionArrow("bottom")
                break;
            }

            case "right":
                positions.changeHorizontalPosition(positions.xRight)
                break;

            case "left":
                positions.changeHorizontalPosition(positions.xLeft)
                break;
        }
        tooltipRef.current.style.transform = `translate(${positions.currentX}px, ${positions.currentY}px)`;
    }, [tooltipVisible, positionArrow, placement, offsetY, offsetX]);
    const classes = cx(
        'tooltip__content',
        className,
    );

    return (
        <div className={cx("tooltip")}>
            {tooltipVisible && createPortal(
                <div 
                    className={classes}
                    ref={tooltipRef}
                >
                    {arrow && <div className={cx("tooltip__arrow", positionArrow)}></div>}

                    {content}
                </div>, 
                teleportTarget)
            } 
            
            <div 
                className="tooltip__trigger" 
                ref={triggerRef}
                onClick={() => trigger === "click" && onClick()}
                onMouseEnter={() => trigger === "hover" && setTooltipVisible(true)} 
                onMouseLeave={() => trigger === "hover" && setTooltipVisible(false)}
            >
                {children}

            </div>
        </div>
    )
}
