import {Button} from "./ul/Button/Button"
import {Icon} from "./ul/icon/Icon"
import "./scss/style.scss"


function App() {
    return (
        <Button prefixIcon={<Icon name="filter"/>}>
            Вход
        </Button>
    )
}

export default App
