import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard } from '@components/anime-card/AnimeCard'

export const AnimeList = () => {
  return (
    <div className={'anime-list'}>
      <AnimeFilters />

      <AnimeCard/>
    </div>
  )
}
