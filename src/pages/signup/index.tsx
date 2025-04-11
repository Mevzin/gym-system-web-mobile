const SignUp = () => {
    return (
        <div className="flex flex-col gap-2 w-[300px] items-center">
            <h1 className="text-slate-200 text-2xl font-bold ">CADASTRO</h1>
            <input placeholder="Usuario" className="h-10 placeholder:pl-3  w-[300px]" />
            <input placeholder="Senha" type="password" className="h-10 placeholder:pl-3 w-[300px]" />
            <input placeholder="Email" type="password" className="h-10 placeholder:pl-3 w-[300px]" />
            <input placeholder="Nome" className="h-10 placeholder:pl-3  w-[300px]" />
            <input placeholder="Idade" type="password" className="h-10 placeholder:pl-3 w-[300px]" />
            <input placeholder="Peso" className="h-10 placeholder:pl-3  w-[300px]" />

            <button className="bg-orange-500 w-[250px] h-10 mt-3 font-bold text-xl"> Cadastrar</button>
            <p className="mt-3">Esqueceu sua senha?</p>

            <div className="mt-5">
                <p>Já possui conta?</p>
                <a className="text-orange-500">Efetuar Login!</a>
            </div>
        </div>
    )
}

export default SignUp