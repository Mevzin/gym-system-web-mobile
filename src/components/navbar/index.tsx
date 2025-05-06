import { FaHome, FaRegUser } from "react-icons/fa"
import { FaClockRotateLeft } from "react-icons/fa6"
import { GiWeightLiftingUp } from "react-icons/gi"
import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t-[0.2px] border-gray-200 shadow z-50">
            <div className="flex justify-around items-center h-16">
                <NavLink to="/" className="flex flex-col items-center text-gray-400 hover:text-orange-500">
                    <FaHome />
                    <span className="text-sm">Início</span>
                </NavLink>
                <NavLink to="/sessions" className="flex flex-col items-center text-gray-400 hover:text-orange-500">
                    <GiWeightLiftingUp />
                    <span className="text-sm">Treino</span>
                </NavLink>
                <NavLink to="/interval" className="flex flex-col items-center text-gray-400 hover:text-orange-500">
                    <FaClockRotateLeft />
                    <span className="text-sm">Intervalo</span>
                </NavLink>
                <NavLink to="/profile" className="flex flex-col items-center text-gray-400 hover:text-orange-500">
                    <FaRegUser />
                    <span className="text-sm">Perfil</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar