import Button from "./UI/Button/Button"
import "./scss/style.scss"

function App() {
    return (
        <Button 
            children="Вход" 
            variant="primary"
            disabled={false}
        />
    )
}

export default App
