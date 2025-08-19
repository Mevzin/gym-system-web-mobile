import { NavLink } from "react-router"
import BannerImage from "../../assets/banner.png"
import useAuth from "../../hooks/useAuth"
import { useMemo, useState } from "react"
import { apiBase } from "../../services/api"
import { ImFire } from "react-icons/im"

interface IUserProfile {
    name?: string
    email?: string
    age?: number
    weight?: number
    gender?: string
    goal?: string
    interval?: number
    fileId?: string
}

const Home = () => {

    const { user, token, logout } = useAuth()

    const [userProfileData, setUserProfileData] = useState<IUserProfile>()

    useMemo(async () => {
        try {
            const response = await apiBase.post(`/user/getUserByEmail`, {
                email: user?.email
            }, {
                headers: { "Authorization": `Bearer ${token}` },
            })
            const data = response.data
            setUserProfileData(data)
        } catch (e) {
            console.error(e)
            logout()
        }
    }, [user, token])

    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl font-bold">Treino de hoje</h1>
            {userProfileData?.fileId ?
                <div className="w-[400px] bg-zinc-900 rounded-md flex flex-col items-start">
                    <div className="w-full h-[145px]">
                        <img src={BannerImage} />
                    </div>
                    <h1 className="ml-4 font-bold">TREINO PERSONALIZADO</h1>
                    <p className="ml-4 font-light text-sm text-gray-400">45 min - 8 exercicios</p>
                    <NavLink to={"/sessions"} className=" flex m-auto w-[90%] h-8 bg-primary rounded-lg font-bold my-3 items-center justify-center"> INICIAR</NavLink>
                </div> :
                <div className="w-[400px] bg-zinc-900 rounded-md flex flex-col items-start">
                    <div className="w-full h-[145px]">
                        <img src={BannerImage} />
                    </div>
                    <h1 className="ml-4 font-bold">Não foi encontrado nenhum treino</h1>
                    <NavLink to={"/sessions"} className=" flex m-auto w-[90%] h-8 bg-primary rounded-lg font-bold my-3 items-center justify-center"> CRIAR UM NOVO TREINO</NavLink>
                </div>}
            <div className="w-[400px] gap-2 pt-2 bg-zinc-900 rounded-md flex flex-col items-start">
                <h1 className="ml-3 font-bold">PERFIL</h1>
                <div className="flex flex-col items-start w-[400px] gap-2">
                    <div className="flex items-center ml-3">
                        <div className="w-14 h-14 rounded-full bg-gray-50"></div>
                        <div className="flex flex-col items-start ml-3">
                            <h1 className="font-bold">{user?.name}</h1>
                            <p className="font-light text-sm text-gray-400">Idade: 30 - Peso: {userProfileData?.weight}kg</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly w-[400px] pb-3">
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>7</h1>
                            <p className="font-bold text-[11px] text-gray-300">TREINOS</p>
                        </div>
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>{userProfileData?.interval}</h1>
                            <p className="font-bold text-[11px] text-gray-300">INTERVALO</p>
                        </div>
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>{userProfileData?.weight} kg</h1>
                            <p className="font-bold text-[11px] text-gray-300">PESO</p>
                        </div>
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <div className="flex items-center gap-1">
                                <h1>{userProfileData?.weight}</h1>
                                <ImFire />
                            </div>
                            <p className="font-bold text-[11px] text-gray-300">STREAK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home