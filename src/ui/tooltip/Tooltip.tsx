import { ReactNode, useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
const cx = cnBind.bind(style)

interface TooltipProps {
    className?: string
    children?: ReactNode
    content?: ReactNode
    offsetX?: number
    offsetY?: number
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' |
                'right' | 'right-start' | 'right-end' | 'left' | 'left-start'| 'left-end'
    trigger?: 'hover' | 'click'
    closeOutside?: boolean
    teleportTarget?: HTMLElement
    showArrow?: boolean
}

export const Tooltip = ({
        children,
        content,
        teleportTarget = document.body,
        placement = 'bottom',
        className = '',
        offsetX = 10,
        offsetY = 10,
        trigger = 'hover',
        closeOutside = true,
        showArrow = false
    }: TooltipProps) => {
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const arrowRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    const onClick = () => {
        setTooltipVisible(!tooltipVisible)
    }

    useEffect(() => {
        const handlerOutsideClick = (event: MouseEvent) => {
            const getClickWindow = (event.target as HTMLElement)

            if (!triggerRef.current?.contains(getClickWindow) &&
                !tooltipRef.current?.contains(getClickWindow)) {
                setTooltipVisible(!tooltipVisible)
            }
        }

        if(tooltipVisible && closeOutside) {
            window.addEventListener('click', handlerOutsideClick)

            return () => window.removeEventListener('click', handlerOutsideClick)
        }
    }, [tooltipVisible, closeOutside])
    // DEBT: Добавить анимацию при появление/скрытие
    useEffect(() => {
        if (!tooltipVisible || !triggerRef.current || !tooltipRef.current) {
            return
        }
        const triggerRefClientRect = triggerRef.current.getBoundingClientRect()
        const contentRefClientRect = tooltipRef.current.getBoundingClientRect()
        // DEBT: В будущем, должным образом сократить код + точно удостовериться в том, что arrow позиционироется по центру тригера
        const positionsArrow = {
            changePositionVertical(position: string) {
                if(!tooltipRef.current || !arrowRef.current) return

                const { height } = arrowRef.current.getBoundingClientRect()
                switch(true) {
                    case position.startsWith('top'):
                        arrowRef.current.style.bottom = '-4px'
                    break

                    case position.startsWith('bottom'):
                        arrowRef.current.style.top = '-4px'
                    break

                    case position === 'left':
                    case position === 'right':
                        arrowRef.current.style.top = '50%'
                    break

                    case position === 'left-start':
                    case position === 'right-start':
                        arrowRef.current.style.top = `${(triggerRefClientRect.height / 2) - (height / 2)}px`
                    break

                    case position === 'left-end':
                    case position === 'right-end':
                        arrowRef.current.style.bottom = `${(triggerRefClientRect.height / 2) - (height / 2)}px`
                    break
                }
            },
            changePositionHorizontal(position: string) {
                if(!tooltipRef.current || !arrowRef.current) return

                switch(true) {
                    case position.startsWith('right'):
                        arrowRef.current.style.left = '-4px'
                    break

                    case position.startsWith('left'):
                        arrowRef.current.style.right = '-4px'
                    break

                    case position === 'bottom':
                    case position === 'top':
                        arrowRef.current.style.left = '50%'
                    break

                    case position === 'bottom-start':
                    case position === 'top-start':
                        arrowRef.current.style.left = `${triggerRefClientRect.width / 2}px`
                    break

                    case position === 'bottom-end':
                    case position === 'top-end':
                        arrowRef.current.style.right = `${triggerRefClientRect.width / 2}px`
                    break
                }
            }
        }

        const positionsTooltip = {
            currentX: 0,
            currentY: 0,
            reversePositioning() {
                const getNewPosition = (value: string, replacement: string) => placement.replace(value, replacement)

                if(placement.startsWith('top')) {

                    if(window.scrollY > this.currentY) {
                        this.setVerticalToHorizontal(getNewPosition('top', 'bottom'))
                        this.setPositionToHorizontal(getNewPosition('top', 'bottom'))
                        positionsArrow.changePositionVertical(getNewPosition('top', 'bottom'))
                        positionsArrow.changePositionHorizontal(getNewPosition('top', 'bottom'))
                    }
                }else if(placement.startsWith('bottom')) {
                    const currentPositions = (window.innerHeight -
                      (this.currentY - window.scrollY + contentRefClientRect.height)
                    )

                    if(currentPositions < 0) {
                        this.setVerticalToHorizontal(getNewPosition('bottom', 'top'))
                        this.setPositionToHorizontal(getNewPosition('bottom', 'top'))
                        positionsArrow.changePositionVertical(getNewPosition('bottom', 'top'))
                        positionsArrow.changePositionHorizontal(getNewPosition('bottom', 'top'))
                    }
                }
            },
            setVerticalToHorizontal(position: string) {
                switch(true){
                    case position.startsWith('top'):
                        this.currentY = ((triggerRefClientRect.top + window.scrollY) -
                          contentRefClientRect.height - offsetY
                        )
                    break

                    case position.startsWith('bottom'):
                        this.currentY = (triggerRefClientRect.top + window.scrollY +
                                                triggerRefClientRect.height + offsetY)
                    break

                    case position === 'left':
                    case position === 'right':
                        this.currentY = (triggerRefClientRect.bottom + window.scrollY -
                                      (triggerRefClientRect.height + contentRefClientRect.height) / 2)
                    break

                    case position ==='left-start':
                    case position === 'right-start':
                        this.currentY = (triggerRefClientRect.top + window.scrollY)
                    break

                    case position ==='left-end':
                    case position === 'right-end':
                        this.currentY = (triggerRefClientRect.bottom + window.scrollY) - contentRefClientRect.height
                    break
                }
            },
            setPositionToHorizontal(position: string) {
                switch(true){
                    case position.startsWith('left'):
                        this.currentX = triggerRefClientRect.x - contentRefClientRect.width - window.scrollX - offsetX
                    break

                    case position.startsWith('right'):
                        this.currentX = triggerRefClientRect.x + triggerRefClientRect.width + window.scrollX + offsetX
                    break

                    case position === 'bottom':
                    case position === 'top':
                        this.currentX = (triggerRefClientRect.x + window.scrollX +
                          (triggerRefClientRect.width - contentRefClientRect.width) / 2)
                    break

                    case position === 'bottom-start':
                    case position === 'top-start':
                        this.currentX = triggerRefClientRect.left
                    break

                    case position === 'bottom-end':
                    case position === 'top-end':
                        this.currentX = triggerRefClientRect.right - contentRefClientRect.width
                    break
                }
            },
            changePosition(currentPosition: string) {
                this.setVerticalToHorizontal(currentPosition)
                this.setPositionToHorizontal(currentPosition)
                this.reversePositioning()
                positionsArrow.changePositionVertical(currentPosition)
                positionsArrow.changePositionHorizontal(currentPosition)
            }
        }

        positionsTooltip.changePosition(placement)
        tooltipRef.current.style.transform = `translate(${positionsTooltip.currentX}px, ${positionsTooltip.currentY}px)`
    }, [tooltipVisible, placement, offsetY, offsetX])

    const classes = cx(
        'tooltip__content',
        className,
    )

    return (
      <div className={cx('tooltip')}>
        <div
          className="tooltip__trigger"
          ref={triggerRef}
          onClick={() => trigger === 'click' && onClick()}
          onMouseEnter={() => trigger === 'hover' && setTooltipVisible(true)}
          onMouseLeave={() => trigger === 'hover' && setTooltipVisible(false)}
        >
          {children}
        </div>

        {tooltipVisible && createPortal(
          <div
            className={classes}
            ref={tooltipRef}
          >
            {showArrow && <div className={cx('tooltip__arrow')} ref={arrowRef}></div>}

            {content}
          </div>,
          teleportTarget)
        }
      </div>
    )
}
