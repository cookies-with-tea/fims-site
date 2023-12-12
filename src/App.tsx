import { Input } from "./ui/input/Input"
// import { Icon } from "./ui/icon/Icon"
import "./scss/style.scss"
import { useState } from "react"


function App() {
    const [value, setValue] = useState("")
    console.log(value)
    
    return (
        <Input 
            placeholder="Username" 
            type="password"
            value={value}
            onChange={setValue}
            prepend="вход"
            // clearable={true}
        />
    )
}
export default App
