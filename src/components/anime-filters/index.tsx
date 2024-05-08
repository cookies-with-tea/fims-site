import { Filter } from '@/components'
import cn from 'classnames'
import cb from 'classnames/bind'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { FILTERS_MOCK_DATA } from '@/mocks'
import { OptionType, UnionOrArray } from '@/types'

const cx = cb.bind(styles)

const fetchFilters = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(FILTERS_MOCK_DATA), 300))
}

export const AnimeFilters = () => {
  const [filters, setFilters] = useState<any[]>([])
  const [filtersValues, setFiltersValues] = useState({})

  const fetchData = async () => {
    console.log({
      filters: filtersValues,
      pagination: {
        page: 1,
        limit: 10,
      },
      sort: {
        field: 'uuid',
        direct: 'asc'
      }
    })
  }

  const getFilters = async () => {
    try {
      const data = await fetchFilters()

      setFilters(data as any)
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
  }, [filtersValues])

  return (
    <section className={cn('container')}>
      <div className={cx('anime-filters')}>
        <div className={cx('anime-filters__content')}>
          { filters.length ? filters?.map((filter, index) => (
            <Filter key={index} filter={filter} onChange={(value) => handleFilterChange(filter.value, value)} />
          )) : null}
        </div>
      </div>
    </section>
  )
}
