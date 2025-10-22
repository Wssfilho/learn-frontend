"use client";
export default function Formulario(){
    return(
        <div className="flex justify-center items-center h-screen w-screen">
            <form
                action=""
                className="flex flex-col p-8 w-96 h-70 space-y-4 text-black bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-md"
            >
                <p className="mb-0 text-center font-bold text-white">Entre com seu email</p>
                <input type="email" name="email" className="px-3 py-2 border border-black rounded-2xl" />
                <p className="mb-0 text-center font-bold text-white">Entre com sua senha</p>
                <input type="password" name="password" className="px-3 py-2 border border-black rounded-2xl" />
                <button type="submit" onClick={() => alert("Formulário enviado!")} className="px-4 py-2 border border-black rounded-2xl bg-gray-100 hover:bg-gray-200">
                    Submit
                </button>
            </form>
        </div>
    );
}