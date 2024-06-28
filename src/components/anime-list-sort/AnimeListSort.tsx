import { Select } from '@/ui'
import { ReactNode } from 'react'
import { UnionOrArray, OptionType } from '@/types'

interface SortType {
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  autocorrectIcons?: ReactNode | boolean
  data: OptionType[]
  onChange?: (values: UnionOrArray<OptionType['value']>) => void
  multiple?: boolean
}

export const AnimeListSort = ({
  placeholder,
  size,
  clearable,
  autocorrectIcons,
  data,
  onChange,
  multiple,
  }: SortType) => {
  return (
    <Select
      placeholder={placeholder}
      size={size}
      clearable={clearable}
      autocorrectIcons={autocorrectIcons}
      data={data}
      multiple={multiple}
      onChange={onChange}
    />
  )
}
