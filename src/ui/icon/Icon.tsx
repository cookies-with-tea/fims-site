import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface IProps {
  name: string
  className?: string
  prefix?: string
  width?: number | string
  height?: number | string
  reversed?: boolean
}

export const Icon = ({
      className,
      name,
      reversed = false,
      prefix = 'icon',
      width = '1em',
      height = '1em'
    }: IProps) => {
    const classNames = cx(
      'icon',
      className,
      `icon--${name}`,
      { reversed }
    )

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
