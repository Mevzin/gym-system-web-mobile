import { useEffect, useState } from "react"
import CreateFile from "./createFile"
import useAuth from "../../hooks/useAuth"
import { apiFile } from "../../services/api"

import exercisesMapped from "../../services/data.json";
import CardTraining from "../../components/cardTraining"


const SessionsPage = () => {

    const { user, token } = useAuth()
    const [fileList, setFileList] = useState()
    const [isReady, setIsReady] = useState(false)

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
            } catch (error) {
                setIsReady(false)
                throw new Error(error as string);
            }
        }

        if (user?.fileId != null) getFileById()
    }, [isReady])


    if (user?.fileId == null || isReady == false) {
        return (
            <CreateFile aoAlterar={handleChildrenMessage} />
        )
    } else {
        return (
            <div className="flex flex-col justify-center items-center w-[350px]">
                <div className="flex flex-col items-start justify-center w-[350px] h-[130px] bg-neutral-900 gap-1 rounded-lg">
                    <h1 className="ml-4 font-bold text-2xl"> TREINO PERSONALIZADO</h1>
                    <p className="ml-4 font-bold text-zinc-400">45 min - 1h e 30min </p>
                </div>

                <div className="flex flex-col justify-center items-center W-[350px] mt-5">
                    <div className="flex justify-between items-baseline w-[320px]">
                        <h1 className="font-medium text-xl">Intervalo</h1>
                        <h2 className="font-medium text-sm text-zinc-400">5 min</h2>
                    </div>

                    <div className="flex flex-col w-[320px] gap-4 mt-3 pb-10">
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
            </div>
        )
    }


}

export default SessionsPage