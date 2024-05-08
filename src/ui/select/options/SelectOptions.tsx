import { OptionType } from '@/types'
import { memo, ReactNode, useState } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Option } from '@ui/select/option/Option'

const cx = cnBind.bind(style)

interface OptionsProps {
  data: OptionType[]
  onChange: (value: OptionType['value']) => void
  checkIconPosition?: 'left' | 'right'
  withCheckIcon?: ReactNode | boolean
}

export const SelectOptions = memo(function SelectOptions({
   data,
   onChange,
   checkIconPosition = 'right',
   withCheckIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>
  } : OptionsProps){

  const [valuesState, setValuesState] = useState(new Set())

  const updateMap = (value: string) => {
    console.log(valuesState.values())
    const _values = new Set(valuesState)

    if (_values.has(value)) {
      _values.delete(value)
    } else {
      _values.add(value)
    }
    console.log(value)
    console.log(_values.values())

    setValuesState(_values)
  }

  return (
    <ul>
      {data.map((item , index) => (
        // <Option
        //   isChecked={valuesState.has(item.value)}
        //   key={index}
        //   data={item}
        //   checkIconPosition={checkIconPosition}
        //   withCheckIcon={withCheckIcon}
        //   onChange={updateMap}
        // />
        <div key={index} onClick={() => updateMap(item.value)}>
          { item.value} --

          { valuesState.has(item.value) ? 'true' : 'false'}
        </div>
      ))}
    </ul>
  )
})
