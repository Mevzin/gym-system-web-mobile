import { FaRegCalendarAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { useAuthContext } from "../../context/AuthContext";
const Profile = () => {

    const { logout } = useAuthContext()
    return (
        <div className="flex flex-col w-[350px] items-center gap-3">
            <div className="flex w-32 h-32 rounded-full bg-gray-600 items-center justify-center">
                <h1 className="text-7xl font-bold">TH</h1>
            </div>

            <div>
                <h1 className="text-2xl font-bold">Thiago Torres</h1>
                <h3 className="text-sm text-gray-400">thiago@dev.com</h3>
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
                    <h2 className="font-bold text-xl">20 anos</h2>
                </div>
                <div className="flex justify-between h-14 bg-zinc-800 items-center p-6 border-b-[0.1px] rounded-t-lg">
                    <div className="flex items-center gap-2 ">
                        <LiaRulerVerticalSolid size={30} />
                        <h2 className="font-semibold text-lg">Altura</h2>
                    </div>
                    <h2 className="font-bold text-xl">170 cm</h2>
                </div>
                <div className="flex justify-between h-14 bg-zinc-800 items-center p-6 rounded-b-lg">
                    <div className="flex items-center gap-2 ">
                        <GiWeight size={30} />
                        <h2 className="font-semibold text-lg">Peso</h2>
                    </div>
                    <h2 className="font-bold text-xl">20 kg</h2>
                </div>
                <div>
                    <button className="w-32 h-10 bg-red-600 font-semibold rounded-lg mt-6" onClick={() => logout()}> Sair da conta</button>
                </div>
            </div>
        </div>
    )
}

export default Profile