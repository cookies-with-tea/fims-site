import { Icon } from "src/ui/icon/Icon";
import style from "./animeSeacrh.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const AnimeSearch = () => {
  return (
      <>  
        <button className={cx("anime-search")}>
          <div className={cx("anime-search__text")}>Поиск</div>
          <Icon name="search" className={cx("anime-search__icon")}/>
        </button>
      </>
  );
};
