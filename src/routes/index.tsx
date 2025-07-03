import { Route, Routes } from "react-router"
import Home from "../pages/home"
import SignIn from "../pages/signin"
import SignUp from "../pages/signup"
import SessionsPage from "../pages/sessions"
import Profile from "../pages/profile"
import NotFound from "../pages/notfound"
import Interval from "../pages/interval"
import useAuth from "../hooks/useAuth"
import { useEffect } from "react"
import { apiBase } from "../services/api"

const RoutesApp = () => {

    const { user, token, logout } = useAuth()

    useEffect(() => {
        async function checkAuth() {
            const status = await apiBase.get("/token/verifyToken", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("teste");

            if (status.data.status === 401) {
                logout()
            }
        }

        checkAuth()
    }, [token])


    return (
        <>
            {
                user ?
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sessions" element={<SessionsPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/interval" element={<Interval />} />
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