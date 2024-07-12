import { AnimeFilters } from '@components/anime-filters'
import { AnimeCard, Sort } from '@/components'
import { useEffect } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { SORT_MOCK_DATA } from '@/mocks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimeList } from '@/redux/anime-list/slices'
import { RootState } from '@/redux/store'

const cx = cnBind.bind(style)

export const AnimeList = () => {
  const dispatch = useDispatch();
  const { animeList, status, error, payloadFilters } = useSelector((state: RootState) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch, payloadFilters]);

  return (
    <div className={cx('anime-list')}>
      <AnimeFilters />

      <Sort data={SORT_MOCK_DATA.animeList} />

      {animeList.length ? (
        <div className={cx('anime-list__wrapper')}>
          <div className='container'>
            <div className={cx('anime-list__body')}>
              {animeList.map((item) => (
                <AnimeCard key={item.uuid} {...item} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
