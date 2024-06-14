import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard } from '@components/anime-card/AnimeCard'
import { useState, useEffect } from 'react'
import { animeApi } from '@/api'
import { AnimeCardResponseType } from '@/types'

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
    <div className={'anime-list'}>
      <AnimeFilters />

      {
        animeList?.length ? (
          animeList?.map((item) => {
            return (
              <AnimeCard key={item.uuid} {...item} />
            )
          })
        ) : null
      }
    </div>
  )
}
