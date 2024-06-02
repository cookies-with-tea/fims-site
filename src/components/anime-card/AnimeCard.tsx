import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Icon } from '@/ui'

const cx = cnBind.bind(style)

export const AnimeCard = ({
  // url,
  // rating,
  // status,
  }: any) => {
  return (
    <div className={cx('anime-card')}>
      <div className={cx('anime-card__img')}>
        <img src={'https://avatars.mds.yandex.net/i?id=5ea72a0867054873088bcb137c756592f8cd513b-10272338-images-thumbs&n=13'} alt={'111'}/>
      </div>

      <div className={cx('anime-card__content')}>
        <div className={cx('anime-card__title')}>
          Название фильма
        </div>

        <div className={cx('anime-card__inner')}>
          <div className={cx('anime-card__rating')}>
            <span className={cx('anime-card__rating-number')}>
              4,9
            </span>

            <Icon
              className={cx('anime-card__icon-star')}
              name={'star'}
            />
          </div>

          <div className={cx('anime-card__status')}>
            онгоинг
          </div>
        </div>
      </div>
    </div>
  )
}
