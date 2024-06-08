import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard } from '@components/anime-card/AnimeCard'

export const AnimeList = () => {
  return (
    <div className={'anime-list'}>
      <AnimeFilters />

      <AnimeCard
        urlPath={'/'}
        rating={9.6}
        status={'Вышел'}
        genre={'драма'}
        year={'1990'}
        age={18}
        title={'Клинок, рассекающий демонов: Тренировка столпов'}
        urlImg={'https://img.yani.tv/posters/big/1636671088.webp'}
      />
    </div>
  )
}
