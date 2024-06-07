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
      <div className={cx('anime-card__poster')}>
        <div className={cx('anime-card__poster-img')}>
          <img src={'https://img.yani.tv/posters/big/1519225029.webp'} alt={'111'} />
        </div>

        <div className={cx('anime-card__poster-info')}>
          <div className={cx('anime-card__poster-actions')}>
            <Icon name={'bookmark'} className={cx('anime-card__icon')}/>

            <Icon name={'share'} className={cx('anime-card__icon')}/>

            <Icon name={'star'} className={cx('anime-card__icon')}/>

            <Icon name={'eye-off'} className={cx('anime-card__icon')}/>
          </div>

          <div className={cx('anime-card__bottom')}>
            <div className={cx('anime-card__rating', 'anime-card__bottom-item')}>
              9,61
            </div>

            <div className={cx('anime-card__year', 'anime-card__bottom-item')} style={{ display: 'flex' }}>
              <Icon name={'calendar'} />

              <div className={cx('anime-card__year-text')}>1999</div>

            </div>

            <div className={cx('anime-card__genre', 'anime-card__bottom-item')} style={{ display: 'flex' }}>
              <div className={cx('anime-card__year-text')}>
                драма
              </div>
            </div>

            <div className={cx('anime-card__status', 'anime-card__bottom-item')}>вышел</div>
          </div>
        </div>
      </div>

      <div className={cx('anime-card__title')}>
        Токийский гуль: Перерождение
      </div>
    </div>
  )
}
