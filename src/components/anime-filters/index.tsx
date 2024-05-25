import { Filter } from '@/components'
import { FiltersData } from '@/mocks/filters.type'
import { useCallback, useEffect, useState } from 'react'
import { FILTERS_MOCK_DATA } from '@/mocks'
import { OptionType, UnionOrArray } from '@/types'
import styles from './styles.module.scss'
import cn from 'classnames'
import cb from 'classnames/bind'

const cx = cb.bind(styles)

const fetchFilters = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(FILTERS_MOCK_DATA), 300))
}

export const AnimeFilters = () => {
  const [filters, setFilters] = useState<FiltersData[]>([])
  const [filtersValues, setFiltersValues] = useState({})

  const fetchData = useCallback(async () => {
    const paylaod = {
      filters: filtersValues,
      pagination: {
        page: 1,
        limit: 10,
      },
      sort: {
        field: 'uuid',
        direct: 'asc'
      }
    }

    console.log(paylaod)
  },[filtersValues])

  const getFilters = async () => {
    try {
      const data = await fetchFilters()

      setFilters(data as FiltersData[])
    } catch (error) {
      console.error(error)
    }
  }

  const handleFilterChange = async (filterValue: string, optionValue: UnionOrArray<OptionType['value']>) => {
    setFiltersValues((prev) => ({
      ...prev,
      [filterValue]: optionValue,
    }))
  }

  useEffect(() => {
    getFilters()
  }, [])

  useEffect(() => {
    fetchData()
  }, [filtersValues, fetchData])

  return (
    <section className={cn('container')}>
      <div className={cx('anime-filters')}>
        <div className={cx('anime-filters__content')}>
          { filters.length ? filters?.map((filter, index) => (
            <Filter
              key={index}
              filter={filter}
              onChange={(value) => handleFilterChange(filter.value, value)}
            />
          )) : null}
        </div>
      </div>
    </section>
  )
}
