import {ChangeEvent, useState, useCallback, useRef} from "react";
import { Icon } from "src/ui/icon/Icon";
import { useModal } from "src/hooks/modal/Modal.tsx";
import { Dialog } from "src/ui/dialog/dialog.tsx";
import { Input } from "src/ui/input/input.tsx";
import { useDebounce } from "src/hooks/debounce/use-debounce.ts";
import { markText } from "src/utils/mark-text.ts";
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
  const [isVisible, handleDialogVisibleToggle] = useModal();
  const [dataFilms, setDataFilms] = useState([])
  const [search, setSearch] = useState("")

  const searchRef = useRef<string>(search)

  searchRef.current = search

  const debounce = useCallback(useDebounce(() => getDataFilms() , 1000), [])

  const onClearValue = (): void => {
    setSearch("" )
  }
  const getDataFilms = async () => {
    try {
      if(searchRef.current.length >= 3){
        const data = await (await (axios.get(url(searchRef.current), option))).data.items.slice(0, 9).filter(({ nameRu }: DataFilms) => nameRu != null)
        setDataFilms(data)
      }
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
    <div className={cx("anime-search")}>
       <button className={cx("anime-search__trigger")} onClick={() => handleDialogVisibleToggle()}>
         <div className={cx("anime-search__text")}>Поиск</div>
         <Icon name="search" className={cx("anime-search__icon")}/>
       </button>

       <Dialog
         visible={isVisible}
         onClose={handleDialogVisibleToggle}
         className={cx("dialog__content")}
         closeEscape
         overlayClosable
         verticalPosition="flex-start"
       >
         <div className={cx("anime-search__title")}>
           Поиск
         </div>
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
    </div>
  );
};
