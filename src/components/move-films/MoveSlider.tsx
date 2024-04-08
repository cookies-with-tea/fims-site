import { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Icon } from '@/ui'
import 'swiper/scss'
import style from './style.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)
// TODO: при появление бэка будет изменено
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
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  // const [swiper, setSwiper] = useState<SwiperClass | null>(null)

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

  const slidersImage = dateSlider.map(({ kinopoiskId, posterUrl }: DataSlider) => (
    <SwiperSlide key={kinopoiskId}>
      <Link to={'/'}>
        <img className={cx('swiper__img')} src={posterUrl} alt={'картинка фильма'} />
      </Link>
    </SwiperSlide>
  ))

  return (
    <div className={'Swiper'}>
      <Swiper
        navigation
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidersImage}
      </Swiper>

      <div className={'swiper__navigation'}>
        <button
          type={'button'}
          className={cx('swiper__button')}
          ref={prevRef}
        >
          <Icon
            reversed
            name={'arrow'}
            className={cx('swiper__button-arrow')}
          />
        </button>

        <button
          type={'button'}
          className={cx('swiper__button')}
          ref={nextRef}
        >
          <Icon
            name={'arrow'}
            className={cx('swiper__button-arrow')}
          />
        </button>
      </div>
    </div>
  )
}
