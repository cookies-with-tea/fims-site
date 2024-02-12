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

// type PositionObject = {
//     currentX: number;
//     currentY: number;
//     yTop(): void;
//     yBottom(): void;
//     xLeft(): void;
//     xRight(): void;
//     reversePositioning(): void;
//     topAndBottom(changeVerticalPosition?: boolean): void;
//     topAndBottomStart(changeVerticalPosition?: boolean): void;
//     topAndBottomEnd(changeVerticalPosition?: boolean): void;
//     right(): void;
//     rightStart(): void;
//     rightEnd(): void;
//     left(): void;
//     leftStart(): void;
//     leftEnd(): void;
// }

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
            yTop(){
                this.currentY = (triggerRect.top + window.scrollY) - tooltipRect.height - offsetY
            },
            yBottom (){
                this.currentY = triggerRect.top + window.scrollY + triggerRect.height + offsetY
            },
            xLeft() {
                this.currentX = triggerRect.x - tooltipRect.width - window.scrollX - offsetX
            },
            xRight() {
                this.currentX = triggerRect.x + triggerRect.width + window.scrollX + offsetX
            },
            reversePositioning(){
                // this[`leftStart`]()
                const a = (placement.split("-").length > 1) ? placement.split("-").map(item => item[0].toUpperCase() + item.slice(1))[1]:""
                if(placement.startsWith("top")) {
                    this[`topAndBottom${a}`](true)
                    if(window.scrollY > positions.currentY) {
                        this[`topAndBottom${a}`]()
                        setPositionArrow("bottom")
                        return
                    }
                    
                }
                // else {
                //     const a: string = (placement.split("-").length > 1) ? placement.split("-").map(item => item[0].toUpperCase() + item.slice(1))[1]:" "
                //     const currentpositions = window.innerHeight - (positions.currentY - window.scrollY + tooltipRect.height)
                //     if(currentpositions < 0) {
                //         this[`topAndBottom${a}`]()
                //         setPositionArrow("top")
                //     } 
                // }
            },
            topAndBottom(changeVerticalPosition: boolean = false ){
                changeVerticalPosition ? positions.yTop() : positions.yBottom()
                this.currentX = (triggerRect.x + window.scrollX + (triggerRect.width - tooltipRect.width) / 2)
            },
            topAndBottomStart(changeVerticalPosition: boolean = false ){
                changeVerticalPosition ? positions.yTop() : positions.yBottom()
                this.currentX = triggerRect.left
            },
            topAndBottomEnd(changeVerticalPosition: boolean = false){
                changeVerticalPosition ? positions.yTop() : positions.yBottom()
                this.currentX = triggerRect.right - tooltipRect.width
            },
            rightAndLeft(changeHorizontalPosition: boolean = false ){
                changeHorizontalPosition ? this.xRight() : this.xLeft()
                this.currentY = (triggerRect.bottom + window.scrollY - (triggerRect.height + tooltipRect.height) / 2)
            },
            rightAndLeftStart(changeHorizontalPosition: boolean = false ){
                changeHorizontalPosition ? this.xRight() : this.xLeft()

                this.currentY = (triggerRect.top + window.scrollY)
            },
            rightAndLeftEnd(changeHorizontalPosition: boolean = false ) {
                changeHorizontalPosition ? this.xRight() : this.xLeft()
                this.currentY = (triggerRect.bottom + window.scrollY) - tooltipRect.height
            }
        }
        
        positions.reversePositioning()

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
