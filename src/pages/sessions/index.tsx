const SessionsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[300px]">
            <div className="flex flex-col items-start justify-center w-[300px] h-[180px] bg-neutral-900 gap-1 rounded-lg">
                <h1 className="ml-4 font-bold text-2xl"> TREINO DE PERNAS</h1>
                <p className="ml-4 font-bold text-zinc-400">45 min - 8 exercícios </p>
                <button className="m-auto w-[90%] h-10 bg-orange-600 rounded-lg font-bold my-3"> INICIAR </button>
            </div>

            <div className="flex flex-col justify-center items-center W-[300px] mt-5">
                <div className="flex justify-between items-baseline w-[260px]">
                    <h1 className="font-medium text-xl">Intervalo</h1>
                    <h2 className="font-medium text-sm text-zinc-400">5 min</h2>
                </div>

                {/* CARDS */}
                <div className="flex flex-col w-[260px] gap-4 mt-3">
                    <div className="flex">
                        <div className="w-[70px] h-[70px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[70px] h-[70px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[70px] h-[70px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[70px] h-[70px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionsPage