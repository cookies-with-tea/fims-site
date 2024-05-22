import styles from './styles.module.scss'
import cb from 'classnames/bind'
import { ReactNode } from 'react'

const cx = cb.bind(styles)

interface ScrollbarProp {
  maxHeight?: string | number
  classNames?: string
  children?: ReactNode
}

export const Scrollbar = ({
   maxHeight = '300',
   classNames,
   children
  }: ScrollbarProp) => {
  return (
    <div
      className={cx('scrollbar', classNames)}
      style={ { maxHeight: `${maxHeight}px` }}
    >
      { children }
    </div>
  )
}
