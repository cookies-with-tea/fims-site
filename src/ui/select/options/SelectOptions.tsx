import { OptionType } from '@/types'
import { ReactNode } from 'react'
import { Icon } from '@/ui'
import { Option } from '@ui/select/option/Option'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

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
  checkedIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>,
  values,
  emptyContent = 'Нет данных'
}: OptionsProps) => {

  return (
    <>
      {data.length ? (
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
      ) : (
        <div>
          { emptyContent }
        </div>
      )}
    </>

  )
}
