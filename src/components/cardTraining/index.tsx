import { useState } from "react"
import { CiCircleCheck } from "react-icons/ci"
import { GiWeightLiftingUp } from "react-icons/gi"

interface ICardProps {
    trainingName: string,
    repeats: string
}

const CardTraining = ({ trainingName, repeats }: ICardProps) => {

    const [checkStatus, setCheckStatus] = useState(false)
    const [colorStatus, setColorStatus] = useState("#FFFFFF")

    function handleCheckButton() {
        if (checkStatus == false) {
            setCheckStatus(true)
            setColorStatus("#2ebf11")
            return
        }

        if (checkStatus == true) {
            setCheckStatus(false)
            setColorStatus("#FFFFFF")
            return
        }
    }

    return (
        <div className="flex justify-between border-y-[0.5px] rounded-md" onClick={() => handleCheckButton()}>
            <div className="flex">
                <div className="flex items-center content-center">
                    <GiWeightLiftingUp height={50} width={50} size={40} />
                </div>
                <div className="flex flex-col items-start justify-center ml-4">
                    <h3 className="font-bold text-lg">{trainingName}</h3>
                    <p className="text-base text-zinc-400">{repeats}</p>
                </div>
            </div>
            <div className="flex w-max items-center" >
                <CiCircleCheck width={30} height={30} size={30} color={colorStatus} fontWeight={30} />
            </div>
        </div>
    )
}

export default CardTraining