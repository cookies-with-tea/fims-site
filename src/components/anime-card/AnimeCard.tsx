import { Icon } from '@/ui'
import { Link } from 'react-router-dom'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface AnimeCardProps {
  urlImg: string
  urlPath: string
  rating: string|number
  status: 'Вышел' | 'Онгоинг'
  age: string|number
  year: string|number
  genre: string
  title: string
}

export const AnimeCard = ({
    urlImg,
    urlPath,
    rating,
    status,
    age,
    year,
    genre,
    title
  }: AnimeCardProps) => {
  return (
    <Link className={cx('anime-card')} to={urlPath}>
      <div className={cx('anime-card__poster')}>
        <div className={cx('anime-card__img')}>
          <img
            className={cx('anime-card__img-item')}
            src={urlImg}
            alt={'poster'}
          />
        </div>

        <div className={cx('anime-card__poster-age')}>
          {age}+
        </div>

        <div className={cx('anime-card__poster-info')}>
          <div className={cx('anime-card__poster-actions')}>
            <Icon name={'bookmark'} className={cx('anime-card__icon')}/>

            <Icon name={'share'} className={cx('anime-card__icon')}/>

            <Icon name={'star'} className={cx('anime-card__icon')}/>

            <Icon name={'eye-off'} className={cx('anime-card__icon')}/>
          </div>

          <div className={cx('anime-card__bottom')}>
            <div className={cx('anime-card__bottom-item', 'anime-card__rating')}>
              { rating }
            </div>

            <div className={cx('anime-card__bottom-item' , 'anime-card__year',)}>
              { year }
            </div>

            <div className={cx('anime-card__bottom-item', 'anime-card__genre')}>
              { genre }
            </div>

            <div className={cx('anime-card__bottom-item', 'anime-card__status')}>
              { status }
            </div>
          </div>
        </div>
      </div>

      <div className={cx('anime-card__title')}>
        { title }
      </div>
    </Link>
  )
}
