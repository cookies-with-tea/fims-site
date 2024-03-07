import {ChangeEvent, useState, useCallback} from "react";
import { Icon } from "src/ui/icon/Icon";
import { useModal } from "src/hooks/modal/Modal.tsx";
import { Dialog } from "src/ui/dialog/dialog.tsx";
import {Input} from "src/ui/input/input.tsx";
import {useDebounce} from "src/hooks/debounce/Debounce.tsx";
import axios from "axios";
import style from "./animeSeacrh.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)
const url: string = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
const option = {
 headers: {
   'X-API-KEY': '4dc0fb6b-92e7-4e5d-b3c6-960b4ce6443d',
   'Content-Type': 'application/json',
 },
}

export const AnimeSearch = () => {
  const [visible, changeVisible] = useModal();
  const [search, setSearch] = useState("")
  // const debounce = useDebounce(() => getDataFilms(),2000)
  const debounce = useCallback(useDebounce(() => getDataFilms(), 2000), [search])
  const onClearValue = (): void => {
   setSearch("" )
  }
  const getDataFilms = async () => {
    try {
      // const data = await (await (axios.get(url, option))).data.items
      console.log(search)
      // console.log(data.filter(item => item.nameRu?.toLowerCase().includes(search.toLowerCase())))
    } catch (error) {
      console.log(error, 1221221212121)
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
        <Dialog visible={visible} onClose={changeVisible}>
          <Input
            name="seacrh"
            size={"sm"}
            value={search}
            placeholder="Поиск"
            onChange={onValueChange}
            onClearValue={onClearValue}
          />
        </Dialog>
      </>
  );
};
