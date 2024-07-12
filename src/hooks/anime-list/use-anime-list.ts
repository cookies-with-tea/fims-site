import { animeApi } from '@/api';
import { AnimeCardResponseType, FetchPayloadOptionsType, FiltersData, OptionType, UnionOrArray } from "@/types"
import { useState } from "react"

// TODO: Вынести в redux
export const useAnimeList = () => {
  const [filters, setFilters] = useState<FiltersData[]>([])
  const [payloadFilters, setPayloadFilters] = useState<FetchPayloadOptionsType>({
    filters: {},
    pagination: {
      page: 1,
      limit: 10,
    },
    sort: {
      field: 'uuid',
      direct: 'asc'
    }
  })
  const [animeList, setAnimeList] = useState<AnimeCardResponseType[]>()

  const handleFilterChange = (filterValue: string, optionValue: UnionOrArray<OptionType['value']>) => {
    setPayloadFilters((prev) => ({
      ...prev,
      [filterValue]: optionValue,
    }))

    console.log('FILTER CHANGE', payloadFilters);

    getAnimeList()
  }

  const handleSortChange = (field: string, direct: 'asc' | 'desc') => { 
    console.log(field, direct)
    
    setPayloadFilters((prev) => ({
     ...prev,
      sort: {
        field,
        direct,
      },
    }))

    console.log('SORT CHANGE', payloadFilters);

    getAnimeList()
  }

  const getFiltersData = async () => {
    try {
      const data = await animeApi.getFilters()

      setFilters(data.data)
    } catch (error) {
      console.error(error)
    }
  }


  const getAnimeList = async () => {
    const data = await animeApi.getAnimeList(payloadFilters)

    console.log('GET ANIME LIST');

    setAnimeList(data.data.items)
  }

  return {
    filters,
    animeList,
    payloadFilters,

    handleFilterChange,
    handleSortChange,
    setFilters,
    setPayloadFilters,
    getAnimeList,
    getFiltersData,
  }
}