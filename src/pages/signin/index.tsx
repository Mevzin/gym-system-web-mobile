import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router"
import { Bounce, toast } from "react-toastify";
import { apiBase } from "../../services/api";
import useAuth from "../../hooks/useAuth";

interface IUserData {
    email: string,
    password: string
}

const SignIn = () => {
    const { register, handleSubmit } = useForm<IUserData>();
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth()

    const navigate = useNavigate()


    const onSubmit: SubmitHandler<IUserData> = async (data) => {
        try {
            if (data.email === "" || data.password === "") {
                toast.error('Preencha todos os campos!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return
            }
            setIsLoading(true);
            await apiBase.post('/user/login', data).then(response => {
                login(response.data.user, response.data.token)
                navigate('/home')
            })
            toast.success('Sessão iniciada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } catch (error) {
            console.error(error);
            toast.error('Email ou senha incorretos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } finally {
            setIsLoading(false);
            navigate("/");
        }
    }
    return (
        <div className="flex flex-col gap-2 w-[300px] items-center">
            <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6">
                <h1 className="text-white text-2xl font-bold text-center">Bem-vindo de volta</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] placeholder-gray-400 text-white border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] placeholder-gray-400 text-white border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    {isLoading ? (
                        <button
                            type="submit"
                            disabled
                            className="bg-gray-500 w-full h-11 mt-2 font-bold text-white rounded-md flex items-center justify-center gap-2 cursor-not-allowed"
                        >
                            Carregando
                            <div className="w-5 h-5 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 w-full h-11 mt-2 font-semibold text-white rounded-md"
                        >
                            Login
                        </button>
                    )}
                </form>

                <p className="text-sm text-center text-white/80 hover:underline cursor-pointer">
                    Esqueceu sua senha?
                </p>

                <div className="text-center text-sm text-white">
                    <p>Não possui conta?</p>
                    <NavLink to={"/signup"} className="text-orange-500 hover:underline">
                        Cadastre-se
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignIn