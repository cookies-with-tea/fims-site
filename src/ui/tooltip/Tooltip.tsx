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
    placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | 
                "right" | "right-start" | "right-end" | "left" | "left-start"| "left-end"
    trigger?: "hover" | "click" 
    closeOutside?: boolean
    teleportTarget?: HTMLElement
    showArrow?: boolean
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
        closeOutside = true,
        showArrow = false
    }: TooltipProps) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const arrowRef = useRef<HTMLDivElement>(null)
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
        
        if(tooltipVisible && closeOutside) {
            window.addEventListener('click', handlerOutsideClick)

            return () => window.addEventListener('click', handlerOutsideClick)
        } 
    }, [tooltipVisible, closeOutside]);
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
                const getNewPosition = (value: string, replacement: string) => placement.replace(value, replacement)

                if(placement.startsWith("top")) {

                    if(window.scrollY > positions.currentY) {
                        this.setVerticalToHorizontal(getNewPosition("top", "bottom"))
                        this.setPositionToHorizontal(getNewPosition("top", "bottom"))
                        // setPositionArrow("bottom")
                    }
                }else if(placement.startsWith("bottom")) {
                    const currentPositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)

                    if(currentPositions < 0) {
                        this.setVerticalToHorizontal(getNewPosition("bottom", "top"))
                        this.setPositionToHorizontal(getNewPosition("bottom", "top"))
                        // setPositionArrow("top")
                    } 
                }
            },
            setVerticalToHorizontal(position: string) {
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
            setPositionToHorizontal(position: string) {
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
            a(position: string){
                const { height, width } = arrowRef.current.getBoundingClientRect()
                switch(true){
                    case position === "top":
                        arrowRef.current.style.left = '50%';
                        arrowRef.current.style.bottom = '-4px';
                    break

                    case position === "top-start":
                        arrowRef.current.style.left =  `${triggerRect.width / 2}px`;
                        arrowRef.current.style.bottom = '-4px';
                    break

                    case position === "top-end":
                        arrowRef.current.style.right =  `${triggerRect.width / 2}px`;
                        arrowRef.current.style.bottom = '-4px';
                    break

                    case position === "right":
                        arrowRef.current.style.left =  `-4px`;
                        arrowRef.current.style.top = '50%';
                    break

                    case position === "right-start":
                        arrowRef.current.style.left =  `-4px`;
                        arrowRef.current.style.top = `${triggerRect.height - height}px`;
                    break

                    case position === "right-end":
                        arrowRef.current.style.left =  `-4px`;
                        arrowRef.current.style.bottom = `${triggerRect.height - height}px`;
                    break
                }
            },
            changePosition(currentPosition: string) {
                this.setVerticalToHorizontal(currentPosition)
                this.setPositionToHorizontal(currentPosition)
                this.reversePositioning()
                this.a(currentPosition)
            }
        }

        positions.changePosition(placement)
        tooltipRef.current.style.transform = `translate(${positions.currentX}px, ${positions.currentY}px)`;
    }, [tooltipVisible, placement, offsetY, offsetX]);

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
                    {showArrow && <div className={cx("tooltip__arrow")} ref={arrowRef}></div>}

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
