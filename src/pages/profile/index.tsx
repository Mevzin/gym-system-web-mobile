import { FaRegCalendarAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { useAuthContext } from "../../context/AuthContext";
import { useMemo, useState } from "react";
import { apiBase } from "../../services/api";
import { Dialog } from "../../components/dialog";

interface IUserProfile {
    name?: string
    email?: string
    age?: number
    weight?: number
    height?: number
    gender?: string
    goal?: string
    interval?: number
    fileId?: string
}

const Profile = () => {

    const [open, setOpen] = useState(false);
    const { logout, user, token } = useAuthContext()
    const [userProfile, setUserProfile] = useState<IUserProfile | null>(null)

    useMemo(async () => {
        const response = await apiBase.post(`/user/getUserById`,
            {
                id: user?.id
            }, {
            headers: { "authorization": `Bearer ${token}` },
        })
        const data = response.data
        setUserProfile(data)
    }, [])

    return (
        <div className="flex flex-col w-[350px] items-center gap-3">
            <div className="flex w-32 h-32 rounded-full bg-gray-600 items-center justify-center">
                <h1 className="text-7xl font-bold">TH</h1>
            </div>

            <div>
                <h1 className="text-2xl font-bold">{userProfile?.name}</h1>
                <h3 className="text-sm text-gray-400">{userProfile?.email}</h3>
            </div>

            <div className="flex w-full justify-evenly">
                <button className="w-32 h-10 bg-slate-600 font-semibold rounded-lg">Editar Perfil</button>
                <button className="w-32 h-10 bg-slate-600 font-semibold rounded-lg">Editar Treino</button>
            </div>

            <div className="flex w-full items-start mt-6">
                <h1 className="font-bold text-xl">Informações Pessoais</h1>
            </div>

            <div className="flex flex-col w-full gap-1">
                <div className="flex justify-between h-14 bg-zinc-800 items-center p-6 border-b-[0.1px] rounded-t-lg">
                    <div className="flex items-center gap-2 ">
                        <FaRegCalendarAlt size={30} />
                        <h2 className="font-semibold text-lg">Idade</h2>
                    </div>
                    <h2 className="font-bold text-xl">{userProfile?.age} anos</h2>
                </div>
                <div className="flex justify-between h-14 bg-zinc-800 items-center p-6 border-b-[0.1px] rounded-t-lg">
                    <div className="flex items-center gap-2 ">
                        <LiaRulerVerticalSolid size={30} />
                        <h2 className="font-semibold text-lg">Altura</h2>
                    </div>
                    <h2 className="font-bold text-xl">{userProfile?.height} cm</h2>
                </div>
                <div className="flex justify-between h-14 bg-zinc-800 items-center p-6 rounded-b-lg">
                    <div className="flex items-center gap-2 ">
                        <GiWeight size={30} />
                        <h2 className="font-semibold text-lg">Peso</h2>
                    </div>
                    <h2 className="font-bold text-xl">{userProfile?.weight} kg</h2>
                </div>
                <div>
                    <button className="w-32 h-10 bg-red-600 font-semibold rounded-lg mt-6" onClick={() => setOpen(true)}> Sair da conta</button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                title="Confirmar ação"
                footer={
                    <>
                        <button
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                logout();
                                setOpen(false);
                            }}
                            className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
                        >
                            Confirmar
                        </button>
                    </>
                }
            >
                <p>Tem certeza que deseja sair da conta?</p>
            </Dialog>
        </div>
    )
}

export default Profile