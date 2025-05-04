import { Route, Routes } from "react-router"
import Home from "../pages/home"
import SignIn from "../pages/signin"
import SignUp from "../pages/signup"
import SessionsPage from "../pages/sessions"
import Profile from "../pages/profile"
import NotFound from "../pages/notfound"

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesApp