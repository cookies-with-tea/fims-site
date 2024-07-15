import { Filter } from '@/components'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'
import cb from 'classnames/bind'
import { useAnimeList } from '@/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { handleFilterChange, setFilters } from '@/redux/anime-list/slices'
import { RootState } from '@/redux/store'
import { useGetFiltersQuery } from '@/api'

const cx = cb.bind(styles)

export const AnimeFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.anime);
  const { data: filtersData } = useGetFiltersQuery();

  useEffect(() => {
    if (filtersData) {
      dispatch(setFilters(filtersData));
    }
  }, [filtersData, dispatch]);

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
  );
};