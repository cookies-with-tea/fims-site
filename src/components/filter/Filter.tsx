import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Select } from '@/ui'

const cx = cnBind.bind(style)

export const Filter = () => {
  return (
    <div className={cx('filter')}>
      <div className='container'>
        <div className={cx('filter__body')}>
          <div className={cx('filter__item')}>
            <Select/>
          </div>
        </div>
      </div>
    </div>
  )
}
