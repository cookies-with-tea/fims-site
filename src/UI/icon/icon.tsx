import cls from 'classnames';
// import style from "./icon.module.scss"

interface IProps {
    name: string
    className?: string
    prefix?: string
    reverse?: boolean
    width?: number | string
    height?: number | string
}


export const SIcon = ({ prefix = 'icon', reverse = false, className, name, width = '1em', height = '1em' }: IProps) => {
    const classNames = cls('s-icon', cls({ 's-icon--reversed': reverse }), className, `s-icon--${name}`)
    const symbolId = `#${prefix}-${name}`

    return (
        <>
            <svg 
                className={classNames} width={width}
                height={height} aria-hidden="true">
                <use href={symbolId} />
            </svg>
        </>
    )
}