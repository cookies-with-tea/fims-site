import {ChangeEvent, useState, useCallback, useRef} from "react";
import { Icon } from "src/ui/icon/Icon";
import { useModal } from "src/hooks/modal/Modal.tsx";
import { Dialog } from "src/ui/dialog/dialog.tsx";
import {Input} from "src/ui/input/input.tsx";
import {useDebounce} from "src/hooks/debounce/Debounce.tsx";
import {markText} from "src/utils/markText.tsx";
import axios from "axios";
import style from "./animeSeacrh.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)
const url = (keyword: string) => `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${keyword}`
const option = {
  headers: {
    'X-API-KEY': '4dc0fb6b-92e7-4e5d-b3c6-960b4ce6443d',
    'Content-Type': 'application/json',
  },
}
interface DataFilms {
  kinopoiskId: number
  nameRu: string
  year: number
}
export const AnimeSearch = () => {
  const [visible, changeVisible] = useModal();
  const [dataFilms, setDataFilms] = useState([])
  const [search, setSearch] = useState("")
  const searchRef = useRef<string>(search)
  searchRef.current = search

  const debounce = useCallback(useDebounce(() => getDataFilms() , 2000), [])
  const onClearValue = (): void => {
    setSearch("" )
  }
  console.log(searchRef.current)
  const getDataFilms = async () => {
    try {
      const data = await (await (axios.get(url(searchRef.current), option))).data.items.slice(0, 9).filter(({ nameRu }: DataFilms) => nameRu != null)
      setDataFilms(data)
      console.log(data)
    } catch (error) {
      console.log(`${error} --- error`)
    }
  }
  // DEBT: в дальнешем пересмотреть надобность функции onClearValue
  const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
    debounce()
  }

  return (
      <>
        <button className={cx("anime-search")} onClick={() => changeVisible()}>
          <div className={cx("anime-search__text")}>Поиск</div>
          <Icon name="search" className={cx("anime-search__icon")}/>
        </button>
        <Dialog
          visible={visible}
          onClose={changeVisible}
          className={cx("dialog__content")}
          title="Поиск"
          closeEscape
          overlayClosable
          verticalPosition="flex-start"
        >
          <Input
            name="search"
            size={"sm"}
            value={search}
            placeholder="Поиск"
            onChange={onValueChange}
            onClearValue={onClearValue}
          />
          <ul className={cx("anime-search__menu")}>
            {dataFilms.map(( {kinopoiskId, nameRu, year}: DataFilms) => (
              <li key={kinopoiskId} className={cx("anime-search__item")}>
                <Icon name="video" className={cx("anime-search__icon-video")}/>
                <div className={cx("anime-search__content")}>
                  <div
                    className={cx("anime-search__name")}
                    dangerouslySetInnerHTML={{__html: markText({repString: searchRef.current, fullString: nameRu})}}>
                  </div>
                  <div className={cx("anime-search__year")}>
                    {year}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Dialog>
      </>
  );
};
