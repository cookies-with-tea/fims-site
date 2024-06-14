import { AnimeListResponseType } from '@/types/anime'

export const ANIME_LIST_MOCK_DATA: AnimeListResponseType = {
  items: [
    {
      uuid: 'qwety-123',
      title: 'Название 1',
      status: 'Новый',
      image: {
        path: 'https://img.yani.tv/posters/big/1636671088.webp',
        alt: 'Anime'
      },
      rating: 18,
      age: '13',
      year: '2017', // Здесь будет другой вид
      genre: 'драма',
      slug: 'nazvanie-1'
    },
    {
      uuid: 'qwety-123-2',
      title: 'Название 2',
      status: 'Новый',
      image: {
        path: 'https://img.yani.tv/posters/big/1636671088.webp',
        alt: 'Anime'
      },
      rating: 18,
      age: '13',
      year: '2017', // Здесь будет другой вид
      genre: 'драма',
      slug: 'nazvanie-1'
    },
    {
      uuid: 'qwety-123-3',
      title: 'Название 3',
      status: 'Новый',
      image: {
        path: 'https://img.yani.tv/posters/big/1636671088.webp',
        alt: 'Anime'
      },
      rating: 18,
      age: '13',
      year: '2017', // Здесь будет другой вид
      genre: 'драма',
      slug: 'nazvanie-1'
    },
    {
      uuid: 'qwety-123-4',
      title: 'Название 4',
      status: 'Новый',
      image: {
        path: 'https://img.yani.tv/posters/big/1636671088.webp',
        alt: 'Anime'
      },
      rating: 18,
      age: '13',
      year: '2017', // Здесь будет другой вид
      genre: 'драма', // вынести в словарь
      slug: 'nazvanie-1'
    },
    {
      uuid: 'qwety-123-5',
      title: 'Название 5',
      status: 'Новый',
      image: {
        path: 'https://img.yani.tv/posters/big/1636671088.webp',
        alt: 'Anime'
      },
      rating: 18,
      age: '13',
      year: '2017', // Здесь будет другой вид
      genre: 'драма',
      slug: 'nazvanie-1'
    },
  ],
  pagination: {
    page: 1,
    total: 10,
    limit: 10,
  }
}