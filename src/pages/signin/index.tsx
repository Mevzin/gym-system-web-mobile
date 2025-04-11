const SignIn = () => {
    return (
        <div className="flex flex-col gap-2 w-[300px] items-center">
            <h1 className="text-slate-200 text-2xl font-bold ">LOGIN</h1>
            <input placeholder="Usuario" className="h-10 placeholder:pl-3  w-[300px]" />
            <input placeholder="Senha" type="password" className="h-10 placeholder:pl-3 w-[300px]" />
            <button className="bg-orange-500 w-[250px] h-10 mt-3 font-bold text-xl"> Login</button>
            <p className="mt-3">Esqueceu sua senha?</p>

            <div className="mt-5">
                <p>Não possui conta?</p>
                <a className="text-orange-500">Cadastre-se</a>
            </div>
        </div>
    )
}

export default SignIn