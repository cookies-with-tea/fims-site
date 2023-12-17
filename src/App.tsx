import { Input } from "./ui/input/input"
// import { Icon } from "./ui/icon/Icon"
import "./scss/style.scss"
import { useState } from "react"


function App() {
    const [value, setValue] = useState("")
    return (
        <Input 
            placeholder="Username" 
            // type="password"
            value={value}
            onChange={setValue}
            prepend="вход"
            // append="Вход"
            // prefixIcon={<Icon name="filter"/>}
            // postfixIcon={<Icon name="filter"/>}
            // clearable={true}
        />
    )
}
export default App
