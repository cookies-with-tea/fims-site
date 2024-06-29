import { Icon, Select } from '@/ui'
import { OptionType, UnionOrArray } from '@/types'
import { FiltersData } from '@/types/filters'
import style from './style.module.scss'

interface FilterProp {
  filter: FiltersData
  onChange: (value: UnionOrArray<OptionType['value']>) => void
}

export const Filter = ({
    filter,
    onChange
  }: FilterProp) => {
  return (
    <Select
      variant={'secondary'}
      clearable={false}
      autocorrectIcons={false}
      prefixIcon={<Icon name={'sort'} className={style.filter__icon}/>}
      postfixIcon={<Icon name={'arrow-bottom'} className={style.filter__icon}/>}
      placeholder={filter.title}
      data={filter.items}
      onChange={onChange}
    />
  )
}
