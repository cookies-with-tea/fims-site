import {Button} from "./ui/Button/Button"
import {Icon} from "./ui/icon/Icon"
import "./scss/style.scss"


function App() {
    return (
        <Button prefixIcon={<Icon name="filter"/>}>
            Вход
        </Button>
    )
}
export default App
