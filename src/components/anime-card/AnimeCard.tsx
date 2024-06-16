import { Icon } from '@/ui'
import { Link } from 'react-router-dom'
import { AnimeCardResponseType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const AnimeCard = ({
    rating,
    status,
    age,
    year,
    genre,
    title,
    uuid,
    slug,
    image,
  }: AnimeCardResponseType) => {
  return (
    <Link className={cx('anime-card')} to={`/anime/${slug}_${uuid}`}>
      <div className={cx('anime-card__poster')}>
        <div className={cx('anime-card__img')}>
          {
            image?.path && (
              <img
                className={cx('anime-card__img-item')}
                src={image?.path}
                alt={image?.alt}
              />
            )
          }
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

            <div className={cx('anime-card__bottom-item' , 'anime-card__year')}>
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
