"use client";
export default function Formulario(){
    return(
        //quero fazer uma caixa com essa div
        <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
            <form action="" className="flex flex-col p-4 text-black bg-white/10 rounded-2xl shadow-md">
                <p className="mb-2 text-center font-bold text-white">Entre com seu email</p>
                <input type="email" name="email" className="mb-2 px-3 py-2 border border-x-black rounded-2xl" />
                <p className="mb-2 text-center font-bold text-white">Entre com sua senha</p>
                <input type="email" name="email" className="mb-2 px-3 py-2 border border-x-black rounded-2xl" />
                <button type="submit" onClick={() => alert("Formulário enviado!")} className="px-4 py-2 border border-x-black rounded-2xl bg-gray-100 hover:bg-gray-200">Submit</button>
            </form>
        </div>



    );
    
}