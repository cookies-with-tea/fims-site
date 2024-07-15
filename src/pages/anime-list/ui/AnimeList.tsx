import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard, Sort } from '@/components'
import { useEffect } from 'react'
import { SORT_MOCK_DATA } from '@/mocks'
import { useDispatch, useSelector } from 'react-redux'
import { handleSortChange, setAnimeList, setError, setStatus } from '@/redux/anime-list/slices'
import { RootState } from '@/redux/store'
import { useLazyGetAnimeListQuery } from '@/api'

import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const AnimeList = () => {
  const dispatch = useDispatch() // для вызова функций
  const { animeList, status, error, payloadFilters } = useSelector((state: RootState) => state.anime) // получение состояний
  const [fetchAnimeList] = useLazyGetAnimeListQuery() // Вызов ленивой подрузки данных. Понадобится для пагинации (наверное)

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        dispatch(setStatus('loading'))

        const animeList = await fetchAnimeList(payloadFilters).unwrap()

        console.log('FETCH ANIME LIST', payloadFilters)
        
        dispatch(setAnimeList(animeList))

        dispatch(setStatus('succeeded'))
      } catch (error) {
        dispatch(setError(error?.toString() ?? ''))

        dispatch(setStatus('failed'))
      }
    }

    fetchAnime()
  }, [payloadFilters, fetchAnimeList, dispatch])

  return (
    <div className={cx('anime-list')}>
      <AnimeFilters />
      
      {/* TODO: Стандартизировать сортировку, возвращать direct */}
      <Sort 
        data={SORT_MOCK_DATA.animeList} 
        onChange={(sortData) => dispatch(handleSortChange({
          field: sortData as string,
          direct: 'desc'
        }))}
      />

      {/* TODO: Придумать какие-нибудь скелетоны и отображение нотификаций об ошибке */}
      {status === 'loading' && <p>Loading...</p>}

      {status === 'failed' && <p>Error: {error}</p>}
      
      {animeList?.items?.length ? (
        <div className={cx('anime-list__wrapper')}>
          <div className='container'>
            <div className={cx('anime-list__body')}>
              {/* TODO: Добавить скелетоны */}
              {animeList?.items.map((item) => (
                <AnimeCard key={item.uuid} {...item} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
