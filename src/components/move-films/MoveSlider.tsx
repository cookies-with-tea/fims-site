import { useEffect, useState, useRef } from 'react'
import type { Swiper as SwiperClass } from 'swiper'
import { Icon } from '@/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation , Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/scss'
import axios from 'axios'
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

export const MoveSlider = (props?: Partial <HTMLDivElement>) => {
  const [dateSlider, setDateSlider] = useState<object[]>([])
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  const paginationRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (swiper) {
      // @ts-ignore
      swiper.params.navigation.prevEl = prevRef.current
      // @ts-ignore
      swiper.params.navigation.nextEl = nextRef.current

      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])

  useEffect(() => {
    const getDateSlides = async () => {
      try {
        const data: object[] = await (await (axios.get(url, option))).data.items
        setDateSlider(data)
        setIsLoading(false)
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

  if (isLoading) {
    return (
      <div>
        Динозавр
      </div>
    )
  }

  return (
    <div className={cx('swiper', props?.className)}>
      <div className={cx('swiper__inner')}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          pagination={{
            el: paginationRef?.current,
            type: 'bullets',
            bulletClass: cx('swiper__pagination-item'),
            bulletActiveClass: cx('swiper__pagination-item_active'),
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={2.5}
          onSwiper={setSwiper}
        >
          {slidersImage}
        </Swiper>

        <div className={'swiper__navigation'}>
          <button
            type={'button'}
            className={cx('swiper__button-prev')}
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
            className={cx('swiper__button-next')}
            ref={nextRef}
          >
            <Icon
              name={'arrow'}
              className={cx('swiper__button-arrow')}
            />
          </button>
        </div>
      </div>

      <div ref={paginationRef} className={cx('swiper__pagination')}></div>
    </div>
  )
}
