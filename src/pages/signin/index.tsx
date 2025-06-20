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
            <h1 className="text-slate-200 text-2xl font-bold ">LOGIN</h1>
            <form className="flex flex-col gap-2 w-[300px] items-center" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" className="h-10 placeholder:pl-3  w-[300px]" {...register("email")} />
                <input placeholder="Senha" type="password" className="h-10 placeholder:pl-3 w-[300px]" {...register("password")} />
                {isLoading ?
                    (<button className="bg-gray-500 w-[250px] h-10 mt-3 font-bold text-xl" type="submit" disabled>Aguarde</button>) :
                    (<button className="bg-orange-500 w-[250px] h-10 mt-3 font-bold text-xl hover: cursor-pointer" type="submit">Login</button>)
                }
            </form>
            <p className="mt-3">Esqueceu sua senha?</p>

            <div className="mt-5">
                <p>Não possui conta?</p>
                <NavLink to={"/signup"} className="text-orange-500">Cadastre-se</NavLink>
            </div>
        </div>
    )
}

export default SignIn