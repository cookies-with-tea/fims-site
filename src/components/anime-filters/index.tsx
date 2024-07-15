import { Filter } from '@/components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFilterChange, setFilters, setStatus } from '@/redux/anime-list/slices'
import { RootState } from '@/redux/store'
import { useGetFiltersQuery } from '@/api'

import styles from './styles.module.scss'
import cb from 'classnames/bind'

const cx = cb.bind(styles)

export const AnimeFilters = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state: RootState) => state.anime)
  const { data: filtersData, error, isLoading } = useGetFiltersQuery()

  useEffect(() => {
    if (isLoading) {
      dispatch(setStatus('loading'))
    } else if (error) {
      dispatch(setStatus('failed'))
    } else if (filtersData) {
      dispatch(setFilters(filtersData))

      dispatch(setStatus('idle'))
    }
  }, [filtersData, error, isLoading, dispatch])

  return (
    <section className={cx('container')}>
      <div className={cx('anime-filters')}>
        <div className={cx('anime-filters__content')}>
          {filters.length ? filters.map((filter, index) => (
            <Filter
              key={index}
              filter={filter}
              onChange={(value) => dispatch(handleFilterChange({ filterValue: filter.value, optionValue: value }))}
            />
          )) : null}
        </div>
      </div>
    </section>
  )
}