import cls from 'classnames'
import style from './styles.module.scss'

interface IProps {
    name: string
    className?: string
    prefix?: string
    width?: number | string
    height?: number | string
}

export const Icon = ({
        className,
        name,
        prefix = 'icon',
        width = '1em',
        height = '1em'
    }: IProps) => {
    const classNames = cls(style.icon,  className, `icon--${name}`)
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
