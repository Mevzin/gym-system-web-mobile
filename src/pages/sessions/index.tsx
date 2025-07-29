import { useEffect, useState } from "react"
import CreateFile from "./createFile"
import useAuth from "../../hooks/useAuth"
import { apiFile } from "../../services/api"

const SessionsPage = () => {

    const { user, token } = useAuth()
    const [fileList, setFileList] = useState()
    console.log(fileList)

    useEffect(() => {

        async function getFileById() {
            try {
                const response = await apiFile.get(`/getFileById/${user?.fileId}`, {
                    headers: { "Authorization": `Bearer ${token}` },
                })
                setFileList(response.data)
            } catch (error) {
                throw new Error(error as string);
            }
        }


        if (user?.fileId != null) getFileById()
    }, [])


    return (
        <div className="flex flex-col justify-center items-center w-[350px]">
            {/* <div className="flex flex-col items-start justify-center w-[350px] h-[180px] bg-neutral-900 gap-1 rounded-lg">
                <h1 className="ml-4 font-bold text-2xl"> TREINO DE PERNAS</h1>
                <p className="ml-4 font-bold text-zinc-400">45 min - 8 exercícios </p>
                <button className="m-auto w-[90%] h-10 bg-orange-600 rounded-lg font-bold my-3"> INICIAR </button>
            </div> */}

            {/* <div className="flex flex-col justify-center items-center W-[350px] mt-5">
                <div className="flex justify-between items-baseline w-[320px]">
                    <h1 className="font-medium text-xl">Intervalo</h1>
                    <h2 className="font-medium text-sm text-zinc-400">5 min</h2>
                </div>

                <div className="flex flex-col w-[320px] gap-4 mt-3 pb-10">
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                        <div className="flex flex-col items-start justify-center ml-4">
                            <h1 className="font-bold text-xl">Remada Baixa</h1>
                            <p className="text-base text-zinc-400">3 x 12</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <CreateFile />
        </div>
    )
}

export default SessionsPage