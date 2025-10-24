"use client";

interface ModalAddMembroProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalAddMembro({ isOpen, onClose }: ModalAddMembroProps) {


    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const nomeCivil = formData.get("nomeCivil");
        const nomeHeroi = formData.get("nomeHeroi");
        const idade = formData.get("idade");
        const time = formData.get("time");
        const pais = formData.get("pais");
        // Lógica para adicionar o membro
    }


    return(
        <>
            {isOpen && (
                <div className="fixed inset-0  bg-black  flex items-center justify-center z-50">
                    <div className="font-sans bg-white rounded-3xl p-8 w-11/12 max-w-md shadow-2xl relative">
                        <h2 className="text-xl mb-4 font-bold">Adicionar Membro</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">Nome Civil:</label> 
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>  
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">Nome do Herói:</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">Idade:</label>
                                <input type="number" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">Time:</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold">País:</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>  
                            <div className="flex justify-end gap-2">
                                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancelar</button>
                                <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}