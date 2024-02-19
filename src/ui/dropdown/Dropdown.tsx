import {Tooltip} from "src/ui/tooltip/Tooltip"
import { ReactNode } from "react"

interface DropdownProps {
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

export const Dropdown = ({
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
    }: DropdownProps) => {
    return (
        <Tooltip 
            content={content} 
            teleportTarget={teleportTarget}
            placement={placement}
            className = {className}
            offsetX = {offsetX}
            offsetY = {offsetY}
            trigger = {trigger}
            closeOutside = {closeOutside}
            showArrow = {showArrow}
        >
            {children}
        </Tooltip>
    )
}
