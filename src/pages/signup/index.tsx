const SignUp = () => {
    return (
        <div className="flex flex-col gap-2 w-[300px] items-center">
            <h1 className="text-slate-200 text-2xl font-bold ">CADASTRO</h1>
            <input placeholder="Usuario" className="h-10   w-[300px] pl-3" />
            <input placeholder="Senha" type="password" className="h-10  w-[300px] pl-3 " />
            <input placeholder="Email" type="email" className="h-10  w-[300px] pl-3" />
            <input placeholder="Nome" className="h-10   w-[300px] pl-3" />
            <input placeholder="Idade" type="text" className="h-10  w-[300px] pl-3" />
            <input placeholder="Peso" className="h-10   w-[300px] pl-3" />

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