import { Route, Routes } from "react-router"
import Home from "../pages/home"
import SignIn from "../pages/signin"
import SignUp from "../pages/signup"
import SessionsPage from "../pages/sessions"
import Profile from "../pages/profile"
import NotFound from "../pages/notfound"
import Interval from "../pages/interval"
import useAuth from "../hooks/useAuth"
import EditFile from "../pages/editFile"
const RoutesApp = () => {

    const { user } = useAuth()

    return (
        <>
            {
                user ?
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sessions" element={<SessionsPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/interval" element={<Interval />} />
                        <Route path="/editFile" element={<EditFile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes> :
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<SignIn />} />
                    </Routes>
            }
        </>
    )
}

export default RoutesApp