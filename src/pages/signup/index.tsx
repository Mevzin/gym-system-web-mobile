import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, redirect, useNavigate } from "react-router"
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
            <h1 className="text-slate-200 text-2xl font-bold ">CADASTRO</h1>
            <form className="flex flex-col gap-2 w-[300px] items-center" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Usuario"
                    className="h-10   w-[300px] pl-3"
                    {...register("username")}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    className="h-10  w-[300px] pl-3 "
                    {...register("password")}
                />
                <input
                    placeholder="Confirmar senha"
                    type="password"
                    className="h-10  w-[300px] pl-3 "
                    {...register("confirmPassword")}
                />
                <input
                    placeholder="Email"
                    type="email"
                    className="h-10  w-[300px] pl-3"
                    {...register("email")}
                />
                <input
                    placeholder="Nome"
                    className="h-10   w-[300px] pl-3"
                    {...register("name")}
                />
                <input
                    placeholder="Idade"
                    type="number"
                    className="h-10  w-[300px] pl-3"
                    {...register("age")}
                />
                <input
                    placeholder="Peso"
                    type="number"
                    className="h-10   w-[300px] pl-3"
                    {...register("weight")}
                />

                {isLoading ?
                    (<button className="bg-gray-500 w-[250px] h-10 mt-3 font-bold text-xl" type="submit" disabled>Aguarde</button>) :
                    (<button className="bg-orange-500 w-[250px] h-10 mt-3 font-bold text-xl" type="submit">Cadastrar</button>)
                }
            </form>


            <div className="mt-5">
                <p>Já possui conta?</p>
                <NavLink to={"/signin"} className="text-orange-500">Efetuar Login</NavLink>
            </div>
        </div>
    )
}

export default SignUp