import { OptionType } from '@/types'
import { ReactNode } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Option } from '@ui/select/option/Option'

const cx = cnBind.bind(style)

interface OptionsProps {
  data: OptionType[]
  onChange: (value: OptionType['value']) => void
  values: Set<OptionType['value']>
  checkIconPosition?: 'left' | 'right'
  checkedIcon?: ReactNode | boolean
}

export const SelectOptions = ({
  data,
  onChange,
  checkIconPosition = 'right',
  checkedIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>,
  values
}: OptionsProps) => {

  return (
    <ul>
      {data.map((option , index) => (
        <Option
          isChecked={values.has(option.value)}
          key={index}
          option={option}
          checkIconPosition={checkIconPosition}
          checkedIcon={checkedIcon}
          onChange={onChange}
        />
      ))}
    </ul>
  )
}
