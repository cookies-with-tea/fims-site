import { Icon } from "src/ui/icon/Icon";
import { useModal } from "src/hooks/modal/Modal.tsx";
import { Dialog } from "src/ui/dialog/dialog.tsx";
import {Input} from "src/ui/input/input.tsx";
import {ChangeEvent, useState} from "react";
import style from "./animeSeacrh.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const AnimeSearch = () => {
  const [visible, changeVisible] = useModal();
  const [search, setSearch] = useState("")

  const onClearValue = (): void => {
    setSearch("" )
  }
  // DEBT: в дальнешем пересмотреть надобность функции onClearValue
  const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
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
