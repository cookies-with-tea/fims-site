import cls from 'classnames';
import style from "./icon.module.scss"

interface IProps {
    name: string
    className?: string
    prefix?: string
    width?: number | string
    height?: number | string
}

export const Icon = ({ prefix = 'icon', className, name, width = '1em', height = '1em' }: IProps) => {
    const classNames = cls(style.icon,  className, `icon__${name}`)
    const symbolId = `#${prefix}-${name}`
    return (
        <>
            <svg 
                className={classNames} 
                width={width}
                height={height} 
                aria-hidden="true"
                >
                <use href={symbolId} />
            </svg>
        </>
    )
}