import { Icon, Select } from '@/ui'
import { ReactNode } from 'react'
import { UnionOrArray, OptionType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SortType {
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  autocorrectIcons?: ReactNode | boolean
  data: OptionType[]
  onChange?: (values: UnionOrArray<OptionType['value']>) => void
  multiple?: boolean
}

export const Sort = ({
  placeholder,
  size,
  clearable,
  autocorrectIcons,
  data,
  onChange,
  multiple,
  }: SortType) => {
  return (
    <div className={cx('anime-sort')}>
      <Select
        placeholder={placeholder}
        size={size}
        clearable={clearable}
        autocorrectIcons={autocorrectIcons}
        data={data}
        multiple={multiple}
        onChange={onChange}
      />

      <button>
        <Icon name={'sort-reverse'}/>
      </button>
    </div>
  )
}
