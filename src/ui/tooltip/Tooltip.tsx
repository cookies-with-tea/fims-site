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
    placement?: "top" | "topStart" | "topEnd" | "bottom" | "bottomStart" | "bottomEnd" | "right" | "left"
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
            yTop(){
                this.currentY = (triggerRect.top + window.scrollY) - tooltipRect.height - offsetY
            },
            yBottom (){
                this.currentY = triggerRect.top + window.scrollY + triggerRect.height + offsetY
            },
            xLeft: () => triggerRect.x - tooltipRect.width - window.scrollX - offsetX,
            xRight: () => triggerRect.x + triggerRect.width + window.scrollX + offsetX,
            reversePositioning(){
                if(placement.startsWith("top")) {
                    const newPosition = placement.replace("top", "bottom")
                    if(window.scrollY > positions.currentY) {
                        positions[newPosition]()
                        setPositionArrow("bottom")
                    } 
                }else {
                    const newPosition = placement.replace("bottom", "top")
                    const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)
                    if(currentpositions < 0) {
                        positions[newPosition]()
                        setPositionArrow("top")
                    } 
                }
            },
            top() {
                this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
                this.reversePositioning()
            },
            topStart() {
                this.currentX = triggerRect.left
            },
            topEnd() {
                this.currentX = triggerRect.right - tooltipRect.width
            },
            bottom() {
                this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
                this.reversePositioning()
            },
            bottomStart() {
                this.currentX = triggerRect.left
            },
            bottomEnd() {
                this.currentX = triggerRect.right - tooltipRect.width
            },
            right() {
                this.currentY = (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2)
                this.currentX = triggerRect.x + triggerRect.width + window.scrollX + offsetX
            },

            left() {
                this.currentY = (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2)
                this.currentX = triggerRect.x - tooltipRect.width - window.scrollX - offsetX
            }
        }


        if(placement.startsWith("top")){
            positions.yTop()
        }else if(placement.startsWith("bottom")) {
            positions.yBottom()
        }
        positions[placement]()

        // switch (placement) {
        //     case "top":
        //         positions.top()
                
        //         if(window.scrollY > positions.currentY) {
        //             positions.bottom()
        //             setPositionArrow("bottom")
        //             break
        //         } 

        //         setPositionArrow("top")
        //         break;
            
        //     case "topStart":
        //         positions.topStart()
        //         break;

        //     case "topEnd":
        //         positions.topEnd()
        //         break;

        //     case "bottom": {
        //         positions.bottom()

        //         const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)

        //         if(currentpositions < 0) {
        //             positions.top()
        //             setPositionArrow("top")
        //             break
        //         } 

        //         setPositionArrow("bottom")
        //         break;
        //     }
        //     case "bottomStart": {
        //         positions.bottomStart()

        //         const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)

        //         if(currentpositions < 0) {
        //             positions.top()
        //             setPositionArrow("top")
        //             break
        //         } 

        //         setPositionArrow("bottom")
        //         break;
        //     }
        //     case "bottomEnd": {
        //         positions.bottomEnd()

        //         const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)

        //         if(currentpositions < 0) {
        //             positions.top()
        //             setPositionArrow("top")
        //             break
        //         } 

        //         setPositionArrow("bottom")
        //         break;
        //     }
        //     case "right":
        //         positions.right()
        //         break;

        //     case "left":
        //         positions.left()
        //         break;
        // }
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
