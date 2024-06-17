import { Select } from '@/ui'
import { OptionType, UnionOrArray } from '@/types'
import { FiltersData } from '@/types/filters'

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
      multiple
      placeholder={filter.title}
      data={filter.items}
      onChange={onChange}
    />
  )
}
