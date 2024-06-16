import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard } from '@components/anime-card/AnimeCard'
import { useState, useEffect } from 'react'
import { animeApi } from '@/api'
import { AnimeCardResponseType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const AnimeList = () => {
  const [animeList, setAnimeList] = useState<AnimeCardResponseType[]>()

  const getAnimeList = async () => {
    const data = await animeApi.getAnimeList()

    setAnimeList(data.data.items)
  }

  useEffect(() => {
    getAnimeList()
  }, [])

  return (
    <div className={cx('anime-list')}>
      <AnimeFilters />

      { animeList?.length ? (
        <div className={cx('anime-list__wrapper')}>
          <div className='container'>
            <div className={cx('anime-list__body')}>
              {/*TODO: Добавить эффект загрузки 'suspense'*/}
              { animeList?.map((item) => (
                <AnimeCard key={item.uuid} {...item} />
              )) }
            </div>
          </div>
        </div>
        ) : null
      }
    </div>
  )
}
