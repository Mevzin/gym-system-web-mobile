import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router"
import { apiBase } from "../../services/api";
import { Bounce, toast } from "react-toastify";

interface IUserData {
    name: string;
    username: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    weight: number;
}

const SignUp = () => {

    const { register, handleSubmit } = useForm<IUserData>();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IUserData> = async (data) => {
        if (!data.name || !data.username || !data.age || !data.email || !data.password || !data.confirmPassword || !data.weight) {
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

        if (data.password === "") {
            toast.error('Preencha a senha!', {
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
        if (data.confirmPassword === "") {
            toast.error('Preencha a confirmação de senha!', {
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
        if (data.password.length < 6) {
            toast.error('Senha deve ter no mínimo 6 caracteres!', {
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
        if (data.confirmPassword.length < 6) {
            toast.error('Senha deve ter no mínimo 6 caracteres!', {
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
        if (data.password.length > 100) {
            toast.error('Senha deve ter no máximo 100 caracteres!', {
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
        if (data.password !== data.confirmPassword) {
            toast.error('Senhas não conferem!', {
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

        try {
            setIsLoading(true);
            await apiBase.post('/user/register', data)
            toast.success('Registro realizado com sucesso!', {
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
            navigate("/signin")
        } catch (error) {
            console.log(error);
            toast.error('Já existe um usuário com esse email ou nome usuário!', {
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
        }
    }

    return (
        <div className="flex flex-col gap-2 w-[300px] items-center">
            <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6">
                <h1 className="text-white text-2xl font-bold text-center">Criar Conta</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Usuário"
                        {...register("username")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        {...register("password")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Confirmar senha"
                        type="password"
                        {...register("confirmPassword")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Nome"
                        autoComplete="name"
                        {...register("name")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Idade"
                        type="number"
                        {...register("age")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    <input
                        placeholder="Peso"
                        type="number"
                        {...register("weight")}
                        className="h-11 w-full px-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-transparent focus:border-orange-500 focus:outline-none"
                    />

                    {isLoading ? (
                        <button
                            type="submit"
                            disabled
                            className="bg-gray-500 w-full h-11 mt-2 font-bold text-white rounded-md flex items-center justify-center gap-2 cursor-not-allowed"
                        >
                            Aguarde...
                            <div className="w-5 h-5 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 w-full h-11 mt-2 font-semibold text-white rounded-md"
                        >
                            Cadastrar
                        </button>
                    )}
                </form>

                <div className="text-center text-sm text-white mt-4">
                    <p>Já possui conta?</p>
                    <NavLink to="/signin" className="text-orange-500 hover:underline">
                        Efetuar Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp