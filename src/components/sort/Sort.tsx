import { Icon, Select } from '@/ui'
import { ReactNode } from 'react'
import { UnionOrArray, OptionType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { handleSortChange } from '@/redux/anime-list/slices'
import { useDispatch } from 'react-redux'

const cx = cnBind.bind(style)

interface SortType {
  data: OptionType[]
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  onChange?: (values: UnionOrArray<OptionType['value']>) => void
  multiple?: boolean
}

// TODO: Исправить компонент сортировки
// Нужно добавить дефолтное значение
// Нужно сделать так, чтобы наверх улетали значения ASC | DESC. Регулирование будет при помощи кнопки
// В самом селекте будут только ключ сортировки уходить наверх
export const Sort = (props: SortType) => {
  return (
    <div className={cx('anime-sort')}>
      <Select variant={'secondary'} {...props} />

      <button>
        <Icon name={'sort-reverse'} />
      </button>
    </div>
  )
}