import { useEffect, useState } from "react"
import CreateFile from "./createFile"
import useAuth from "../../hooks/useAuth"
import { apiFile } from "../../services/api"

import exercisesMapped from "../../services/data.json";
import CardTraining from "../../components/cardTraining"
import { Dialog } from "../../components/dialog";
import { FaCaretDown } from "react-icons/fa";


const SessionsPage = () => {

    const { user, token } = useAuth()
    const [open, setOpen] = useState(false);
    const [fileList, setFileList] = useState()
    const [isReady, setIsReady] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [selectInterval, setSelectedInterval] = useState(4)

    const handleChildrenMessage = (status: boolean) => {
        setIsReady(status)
    }

    useEffect(() => {
        async function getFileById() {
            try {
                const response = await apiFile.get(`/getFileById/${user?.fileId}`, {
                    headers: { "Authorization": `Bearer ${token}` },
                })
                setFileList(response.data.file)
                setIsReady(true)
                setIsLoading(false)
            } catch (error) {
                setIsReady(false)
                throw new Error(error as string);
            }
        }

        if (user?.fileId != null) getFileById()
    }, [isReady])

    if (isLoading == true) {
        return (
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold text-2xl">Carregando ...</h1>
                <div className="w-5 h-5 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    } else if (user?.fileId == null || isReady == false) {
        return (
            <CreateFile aoAlterar={handleChildrenMessage} />
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center w-[400px]">
                <div className="flex flex-col items-start justify-center w-[400px] h-[130px] bg-neutral-900 gap-1 rounded-lg">
                    <h1 className="ml-4 font-bold text-2xl"> TREINO PERSONALIZADO</h1>
                    <p className="ml-4 font-bold text-zinc-400">45 min - 1h e 30min </p>
                </div>

                <div className="flex flex-col justify-center items-center W-[400px] mt-5">
                    <div className="flex justify-between items-baseline w-[320px]">
                        <h1 className="font-medium text-xl">Intervalo</h1>
                        <button onClick={() => setOpen(true)} className="flex items-center font-medium text-sm text-zinc-400">{selectInterval} min <FaCaretDown /></button>
                    </div>

                    <div className="flex flex-col w-[400px] gap-4 mt-3 pb-10">
                        {Object.entries(exercisesMapped).map(([group, exercises]) => {
                            if (!Array.isArray(exercises)) {
                                return (
                                    <div
                                        key={group}
                                        className="bg-zinc-900 flex flex-col rounded-md border shadow-xl p-2"
                                    >
                                        <h2 className="text-xl font-bold text-orange-600 mb-2">
                                            {group}
                                        </h2>
                                        {Object.entries(exercises).map(([subGroup, list]) => (
                                            <div key={subGroup} className="mb-4">
                                                <h3 className="mb-3 text-md font-semibold text-gray-300">
                                                    {subGroup}
                                                </h3>
                                                <ul className="">
                                                    {list.map(({ label, value }) => {
                                                        if (fileList?.[value] != "0x0" && fileList?.[value] != "0x 0") {
                                                            return (
                                                                <div className="mb-2">
                                                                    <CardTraining key={value} repeats={fileList?.[value] || ""} trainingName={label} />
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={group}
                                    className="bg-zinc-900 p-3 rounded shadow"
                                >
                                    <h2 className="text-xl font-bold text-orange-600 mb-2">
                                        {group}
                                    </h2>
                                    <ul className="space-y-3">
                                        {exercises.map(({ label, value }) => {
                                            if (fileList?.[value] != "0x0" && fileList?.[value] != "0x 0") {
                                                return (
                                                    <CardTraining key={value} repeats={fileList?.[value] || ""} trainingName={label} />
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Selecione o tempo de intervalo!"
                    footer={
                        <>
                            <h1 className="flex items-center mr-6">Selecionado: {selectInterval} {selectInterval != 30 ? "min" : "sec"}</h1>
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                }}
                                className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
                            >
                                Confirmar
                            </button>
                        </>
                    }
                >
                    <div className="flex gap-2 justify-center">
                        <button className="border border-zinc-600 w-16 h-10 rounded-sm" onClick={() => setSelectedInterval(30)}>30 sec</button>
                        <button className="border border-zinc-600 w-16 h-10 rounded-sm" onClick={() => setSelectedInterval(1)}>1 min</button>
                        <button className="border border-zinc-600 w-16 h-10 rounded-sm" onClick={() => setSelectedInterval(2)}>2 min</button>
                        <button className="border border-zinc-600 w-16 h-10 rounded-sm" onClick={() => setSelectedInterval(3)}>3 min</button>
                        <button className="border border-zinc-600 w-16 h-10 rounded-sm" onClick={() => setSelectedInterval(4)}>4 min</button>
                    </div>
                </Dialog>
            </div>
        )
    }


}

export default SessionsPage