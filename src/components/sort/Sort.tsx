import { Icon, Select } from '@/ui'
import { ReactNode } from 'react'
import { UnionOrArray, OptionType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { useAnimeList } from '@/hooks'
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

export const Sort = (props: SortType) => {
  const dispatch = useDispatch();

  const onSortChange = (value: string) => {
    const [field, direct] = value.split(' ');
    dispatch(handleSortChange({ field, direct: 'asc' }));
  };

  return (
    <div className={cx('anime-sort')}>
      <Select variant={'secondary'} {...props} onChange={onSortChange} />
      <button>
        <Icon name={'sort-reverse'} />
      </button>
    </div>
  );
};