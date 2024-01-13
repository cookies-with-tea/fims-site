import { useState } from 'react'

export const useModal = (): [boolean, () => void] => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const changeVisible = () => {
        setIsVisible(!isVisible);
    }

    return [
        isVisible,
        changeVisible
    ]
}
