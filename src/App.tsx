import {Button} from "./UI/Button/Button"
import {Icon} from "./UI/icon/Icon"
import "./scss/style.scss"


function App() {
    return (
        <Button prefixIcon={<Icon name="filter"/>} onClick={()=> alert(1)}>
            Вход
        </Button>
    )
}

export default App
