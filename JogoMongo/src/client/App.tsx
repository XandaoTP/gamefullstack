
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./routes/SignupRoutes";
import { SignInRoute } from "./routes/signinRoute";
import { HomeRoute } from "./routes/homeroutes";
import './style.css'

export default function App() {
    return <div>
        <BrowserRouter>
            <div>App</div>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/sign-in" element={<SignInRoute />} />
                <Route path="/sign-up" element={<SignUpRoute />} />
            </Routes>
        </BrowserRouter>
    </div>
}
