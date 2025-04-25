const Home = () => {
    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl font-bold">Treino de hoje</h1>
            <div className="w-[350px] bg-zinc-900 rounded-md flex flex-col items-start">
                <div className="w-full h-[150px]">

                </div>
                <h1 className="ml-4 font-bold">TREINO DE PERNAS</h1>
                <p className="ml-4 font-light text-sm text-gray-400">45 min - 8 exercicios</p>
                <button className="m-auto w-[90%] h-8 bg-orange-600 rounded-lg font-bold my-3"> INICIAR</button>
            </div>
            <div className="w-[350px] gap-2 pt-2 bg-zinc-900 rounded-md flex flex-col items-start">
                <h1 className="ml-3 font-bold">PERFIL</h1>
                <div className="flex flex-col items-start w-[350px] gap-2">
                    <div className="flex items-center ml-3">
                        <div className="w-14 h-14 rounded-full bg-gray-50"></div>
                        <div className="flex flex-col items-start ml-3">
                            <h1 className="font-bold">Taylor Sans</h1>
                            <p className="font-light text-sm text-gray-400">Idade: 30 - Peso: 98kg</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly w-[350px] pb-3">
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>7</h1>
                            <p className="font-bold text-[11px] text-gray-300">TREINOS</p>
                        </div>
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>3h 20m</h1>
                            <p className="font-bold text-[11px] text-gray-300">DURAÇÃO</p>
                        </div>
                        <div className="flex flex-col items-center m-auto align-middlealign-middle justify-center bg-zinc-700 h-[50px] w-[90px] rounded-md">
                            <h1>720</h1>
                            <p className="font-bold text-[11px] text-gray-300">CALORIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home