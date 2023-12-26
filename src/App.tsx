import { Route, Routes } from "react-router-dom"
import { GuestLayout } from "./components/pages/auth/GuestLayou"
import "./scss/style.scss"

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/login" element={<GuestLayout/>}/>
                <Route path="/register" element={<GuestLayout/>}/>
            </Routes>
        </div>
    )
}
export default App
