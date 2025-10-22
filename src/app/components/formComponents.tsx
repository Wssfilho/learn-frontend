"use client";

import { useRouter } from "next/navigation";
import Header from "./header";

export default function Formulario(){
    const router = useRouter();
    return(
        <>
        <div className="flex justify-center items-center h-screen w-screen">
            <form
                action=""
                className="flex flex-col p-8 w-96 h-auto space-y-4 text-black bg-gradient-to-r rounded-2xl shadow-xl"
            >
                
                <img src="/img/login.svg" className="w-20 h-20 mx-auto mb-4" alt="Login" />
                <p className="flex justify-center items-center ">Bem vindo!</p>
                <input placeholder="Email" type="email" name="email" className="px-3 py-2 border border-black rounded-2xl" />
                <input placeholder="Senha" type="password" name="password" className="px-3 py-2 border border-black rounded-2xl" />
                <button type="button" onClick={() => router.push('/home')} className="px-4 py-2 border border-black rounded-2xl bg-gray-100 hover:bg-gray-200">

                    Submit
                </button>
            </form>
        </div>
        </>
    );
}