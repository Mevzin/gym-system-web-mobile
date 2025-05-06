
const Interval = () => {
    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl font-bold">Seleção de intervalo</h1>
            <div className="w-[350px] h-[200px] bg-zinc-900 rounded-md justify-center flex flex-col items-start">

                <h1 className="ml-4 font-bold">Tempo de intervalo atual:</h1>
                <p className="ml-4 font-light text-lg text-gray-100 mb-3">5 min</p>
                <h1 className="ml-4 font-bold">Selecione uma das opções:</h1>
                <div className="flex flex-row w-full items-center justify-evenly mt-3">
                    <button className="h-[40px] w-[55px] border rounded-lg">1 min</button>
                    <button className="h-[40px] w-[55px] border rounded-lg">2 min</button>
                    <button className="h-[40px] w-[55px] border rounded-lg">3 min</button>
                    <button className="h-[40px] w-[55px] border rounded-lg">4 min</button>
                    <button className="h-[40px] w-[55px] border rounded-lg">5 min</button>
                </div>
            </div>

        </div>
    )
}

export default Interval