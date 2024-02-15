import { ReactNode, useRef, useState, useEffect} from "react"
import {createPortal} from 'react-dom';
import style from "./tooltip.module.scss"
import cnBind from 'classnames/bind'
const cx = cnBind.bind(style)



interface TooltipProps {
    className?: string
    children?: ReactNode
    content?: ReactNode
    offsetX?: number    
    offsetY?: number    
    placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start"| "left-end"
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
    }: TooltipProps) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const [positionArrow, setPositionArrow] = useState(placement)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null);

    const onClick = () => {
        setTooltipVisible(!tooltipVisible)
    }

    useEffect(() => {
        const handlerOutsideClick = (event: MouseEvent) => {
            const getClickWindow = (event.target as HTMLElement)
            if (!triggerRef.current?.contains(getClickWindow) && 
                !tooltipRef.current?.contains(getClickWindow)) {
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
            reversePositioning() {
                if(placement.startsWith("top")) {
                    if(window.scrollY > positions.currentY) {
                        const newPosition = placement.replace("top", "bottom")
                        this.setVerticalToPositon(newPosition)
                        this.setHorizontalToPositon(newPosition)
                        setPositionArrow("bottom")
                    }
                }else if(placement.startsWith("bottom")) {
                    const currentPositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)
                    if(currentPositions < 0) {
                        const newPosition = placement.replace("bottom", "top")
                        this.setVerticalToPositon(newPosition)
                        this.setHorizontalToPositon(newPosition)
                        setPositionArrow("top")
                    } 
                }
            },
            setVerticalToPositon(position: string) {
                switch(true){
                    case position.startsWith("top"):
                        this.currentY = (triggerRect.top + window.scrollY) - tooltipRect.height - offsetY
                    break

                    case position.startsWith("bottom"):
                        this.currentY = triggerRect.top + window.scrollY + triggerRect.height + offsetY
                    break

                    case position === "left":
                    case position === "right":
                        this.currentY = (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2)
                    break
                    
                    case position ==="left-start":
                    case position === "right-start":
                        this.currentY = (triggerRect.top + window.scrollY)
                    break

                    case position ==="left-end":
                    case position === "right-end":
                        this.currentY = (triggerRect.bottom + window.scrollY) - tooltipRect.height
                    break
                }
            },
            setHorizontalToPositon(position: string) {
                switch(true){
                    case position.startsWith("left"):
                        this.currentX = triggerRect.x - tooltipRect.width - window.scrollX - offsetX
                    break

                    case position.startsWith("right"):
                        this.currentX = triggerRect.x + triggerRect.width + window.scrollX + offsetX
                    break

                    case position === "bottom":
                    case position === "top":
                        this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
                    break

                    case position === "bottom-start":
                    case position === "top-start":
                        this.currentX = triggerRect.left
                    break

                    case position === "bottom-end":
                    case position === "top-end":
                        this.currentX = triggerRect.right - tooltipRect.width
                    break

                    
                }
            },
            changePositon(currentPosition: string) {
                this.setVerticalToPositon(currentPosition)
                this.setHorizontalToPositon(currentPosition)
                this.reversePositioning()
            }
        }

        positions.changePositon(placement)
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
