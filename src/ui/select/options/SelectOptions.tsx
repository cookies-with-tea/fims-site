import { OptionType } from '@/types'
import { ReactNode } from 'react'
import { Icon , Scrollbar } from '@/ui'
import { Option } from '@ui/select/option/Option'

interface OptionsProps {
  data: OptionType[]
  onChange: (value: OptionType['value']) => void
  values: Set<OptionType['value']>
  checkIconPosition?: 'left' | 'right'
  checkedIcon?: ReactNode | boolean
  emptyContent?: ReactNode
}

export const SelectOptions = ({
  data,
  onChange,
  checkIconPosition = 'right',
  checkedIcon = <Icon name={'checked'} />,
  values,
  emptyContent = 'Нет данных'
}: OptionsProps) => {
  return (
    <>
      { data.length ? (
        <Scrollbar maxHeight={200} >
          <ul>
            {data.map((option, index) => (
              <Option
                isChecked={new Set(values).has(option)}
                key={index}
                option={option}
                checkIconPosition={checkIconPosition}
                checkedIcon={checkedIcon}
                onChange={onChange}
              />
            ))}
          </ul>
        </Scrollbar>
      ) : (
        <div>
          {emptyContent}
        </div>
      )}
    </>

  )
}
