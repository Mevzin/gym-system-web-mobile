interface ICardProps {
    trainingName: string,
    repeats: string
}

const CardTraining = ({ trainingName, repeats }: ICardProps) => {
    return (
        <div className="flex">
            <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
            <div className="flex flex-col items-start justify-center ml-4">
                <h3 className="font-bold text-lg">{trainingName}</h3>
                <p className="text-base text-zinc-400">{repeats}</p>
            </div>
        </div>
    )
}

export default CardTraining