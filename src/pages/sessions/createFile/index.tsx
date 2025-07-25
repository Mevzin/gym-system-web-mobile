/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { apiFile } from "../../../services/api";
import useAuth from "../../../hooks/useAuth";
import exercisesMapped from "../../../services/data.json";

const CreateFile = () => {
    const [loading, setLoading] = useState(false);
    const { token, user, addUserFileId } = useAuth();
    const [userFile, setUserFile] = useState<any>(null);
    const [formValues, setFormValues] = useState<any>({});
    const [saving, setSaving] = useState(false);

    const fillEmptyFields = (baseValues: any) => {
        const allExerciseKeys: string[] = [];

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(exercisesMapped).forEach(([_, group]) => {
            if (Array.isArray(group)) {
                group.forEach(({ value }) => allExerciseKeys.push(value));
            } else {
                Object.values(group).forEach((subGroup: any) => {
                    subGroup.forEach(({ value }: any) => allExerciseKeys.push(value));
                });
            }
        });

        const filledValues = { ...baseValues };
        allExerciseKeys.forEach((key) => {
            if (!(key in filledValues)) {
                filledValues[key] = "";
            }
        });

        return filledValues;
    };

    const handleCreateFile = async () => {
        setLoading(true);
        try {
            const response = await apiFile.post(
                "/createFile",
                { userId: user?.id },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const fileSaved = response.data.fileSaved;
            const filled = fillEmptyFields(fileSaved);

            setUserFile(fileSaved);
            setFormValues(filled);

            const userData = {
                id: user?.id,
                name: user?.name,
                email: user?.email,
                role: user?.role,
                fileId: fileSaved._id,
            };

            addUserFileId(userData);
        } catch (error) {
            console.error("Error generating training file:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) => {
        const input = e.target.value;
        const isValid = /^[0-9]{0,2}x?[0-9]{0,2}$/.test(input);

        if (isValid) {
            setFormValues((prev: any) => ({
                ...prev,
                [key]: input,
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await apiFile.put(
                `/updateFileById/${userFile._id}`,
                formValues,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Training updated successfully!");
        } catch (err) {
            console.error("Error updating training:", err);
            alert("Error saving training.");
        } finally {
            setSaving(false);
        }
    };

    if (user?.fileId === null && !userFile) {
        return (
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-2xl">
                    This user currently has no training registered!
                </h1>
                <p>Click the button below to start the registration!</p>
                {loading ? (
                    <button
                        disabled
                        className="flex gap-3 m-auto w-[90%] h-8 bg-gray-500 rounded-lg font-bold my-3 items-center justify-center"
                    >
                        Generating
                        <div className="w-5 h-5 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    </button>
                ) : (
                    <button
                        onClick={handleCreateFile}
                        className="flex m-auto w-[90%] h-8 bg-orange-600 rounded-lg font-bold my-3 items-center justify-center"
                    >
                        Generate training
                    </button>
                )}
            </div>
        );
    }

    if (userFile) {
        return (
            <div className="p-4 space-y-6 bg-zinc-700 mb-16 shadow-xl w-[300px]">
                {Object.entries(exercisesMapped).map(([group, exercises]) => {
                    if (!Array.isArray(exercises)) {
                        return (
                            <div
                                key={group}
                                className="bg-zinc-900 flex flex-col items-center rounded-md border shadow-xl p-2"
                            >
                                <h2 className="text-xl font-bold text-orange-600 mb-2">
                                    {group}
                                </h2>
                                {Object.entries(exercises).map(([subGroup, list]) => (
                                    <div key={subGroup} className="mb-4">
                                        <h3 className="text-md font-semibold text-gray-300">
                                            {subGroup}
                                        </h3>
                                        <ul className="space-y-1 mt-1">
                                            {list.map(({ label, value }) => (
                                                <li
                                                    key={value}
                                                    className="flex justify-between border-b pb-1"
                                                >
                                                    <span className="mr-6">{label}</span>
                                                    <input
                                                        className="text-gray-900 bg-white w-14 text-center rounded"
                                                        type="text"
                                                        pattern="[0-9]{1,2}x[0-9]{1,2}"
                                                        title="Format: 12x3"
                                                        value={formValues[value]}
                                                        onChange={(e) => handleInputChange(e, value)}
                                                    />
                                                </li>
                                            ))}
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
                            <ul className="space-y-1">
                                {exercises.map(({ label, value }) => (
                                    <li
                                        key={value}
                                        className="flex justify-between border-b pb-1"
                                    >
                                        <span>{label}</span>
                                        <input
                                            className="text-gray-900 bg-white w-14 text-center rounded"
                                            type="text"
                                            pattern="[0-9]{1,2}x[0-9]{1,2}"
                                            title="Format: 12x3"
                                            value={formValues[value]}
                                            onChange={(e) => handleInputChange(e, value)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}

                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`mt-4 w-full h-10 rounded-lg font-bold text-white ${saving
                        ? "bg-gray-500"
                        : "bg-green-600 hover:bg-green-700"
                        }`}
                >
                    {saving ? "Salvand..." : "Salvar Treino"}
                </button>
            </div>
        );
    }

    return null;
};

export default CreateFile;
