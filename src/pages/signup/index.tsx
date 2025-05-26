import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router"
import { apiBase } from "../../services/api";

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

    const onSubmit: SubmitHandler<IUserData> = async (data) => {
        if (data.password === "") {
            alert("Preencha a senha")
            return
        }
        if (data.confirmPassword === "") {
            alert("Preencha a confirmação de senha")
            return
        }
        if (data.password.length < 6) {
            alert("Senha deve ter no mínimo 6 caracteres")
            return
        }
        if (data.confirmPassword.length < 6) {
            alert("Senha deve ter no mínimo 6 caracteres")
            return
        }
        if (data.password.length > 100) {
            alert("Senha deve ter no máximo 100 caracteres")
            return
        }
        if (data.password !== data.confirmPassword) {
            alert("Senhas não conferem")
            return
        }
        try {
            setIsLoading(true);
            await apiBase.post('/user/register', data)
        } catch (error) {
            console.log(error);

        } finally {
            console.log("Fim req");
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
                    type="text"
                    className="h-10  w-[300px] pl-3"
                    {...register("age")}
                />
                <input
                    placeholder="Peso"
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