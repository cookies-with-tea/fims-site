import { FiltersData } from '@/types/filters'

export const FILTERS_MOCK_DATA: FiltersData[] = [
  {
    title: 'Жанры',
    value: 'genres',
    uuid: window.crypto.randomUUID(),
    items: [
      {
        label: 'Хоррор',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Комедия',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Приключения',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Комедия',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Приключения',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Хоррор',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Комедия',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Приключения',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Комедия',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Приключения',
        value: window.crypto.randomUUID(),
      }
    ]
  },
  {
    title: 'Страны',
    value: 'countries',
    uuid: window.crypto.randomUUID(),
    items: [
      {
        label: 'Омерика',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Британия',
        value: window.crypto.randomUUID(),
      },
      {
        label: 'Казхастан',
        value: window.crypto.randomUUID(),
      }
    ]
  }
]
