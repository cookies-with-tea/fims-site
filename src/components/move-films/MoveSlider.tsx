// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
const option = {
  headers: {
    'X-API-KEY': '4dc0fb6b-92e7-4e5d-b3c6-960b4ce6443d',
    'Content-Type': 'application/json',
  },
}

type DataSlider = {
  kinopoiskId?: number
  posterUrl?: string
}

export const MoveSlider = () => {
  const [dateSlider, setDateSlider] = useState<object[]>([])

  useEffect(() => {
    const getDateSlides = async () => {
      try {
        const data: object[] = await (await (axios.get(url, option))).data.items
        setDateSlider(data)
      } catch (error) {
        console.log(`${error} --- error`)
      }
    }

    getDateSlides()
  }, [])
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dateSlider.map(({ kinopoiskId, posterUrl }: DataSlider) => (
        <SwiperSlide key={kinopoiskId}>
          <Link to={'/'}>
            <img src={posterUrl} alt={'картинка фильма'}/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
