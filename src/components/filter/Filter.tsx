import { Select } from '@/ui'
import { OptionType, UnionOrArray } from '@/types'

export const Filter = ({ filter, onChange }: { filter: any, onChange: (value: UnionOrArray<OptionType['value']>) => void }) => {
  return (
    <Select
      multiple
      placeholder={filter.title}
      data={filter.items}
      // onClearValue={onClearValue}
      onChange={onChange}
    />
  )
}
