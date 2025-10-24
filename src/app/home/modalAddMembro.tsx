"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface ModalAddMembroProps {
    isOpen: boolean;
    onClose: () => void;
    country: Country[];
}
interface Country {
    id: number;
    name: string;
}
interface Hero {
    civilName: string;
    heroName: string;
    age: number;
    team?: string;
    countryId: number;
    powerId: number;
}
interface Power {
    id: number;
    name: string;
}
export default function ModalAddMembro({ isOpen, onClose, country}: ModalAddMembroProps) {

    const [powers, setPowers] = useState<Power[]>([]);
    const [formHero, setFormHero] = useState<Hero>({
        civilName: '',
        heroName: '',
        age: 0,
        team: '',
        countryId: 0,
        powerId: 0,
    });

    useEffect(() => {
        const fetchPowers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/power/');
                console.log(response.data);
                setPowers(response.data);
            } catch (error) {
                console.log('Erro ao buscar poderes:', error);
            }
        };

        fetchPowers();
    }, []);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormHero({
            ...formHero,
            [name]: name === 'age' || name === 'countryId' || name === 'powerId' ? Number(value) : value,
        });
    }
        
    const isFormValid = () => {
        return (
            formHero.civilName.trim() !== '' &&
            formHero.heroName.trim() !== '' &&
            formHero.age > 0 &&
            formHero.team?.trim() !== '' &&
            formHero.countryId > 0 &&
            formHero.powerId > 0
        );
    };

    const criarHeroi = async (e: React.FormEvent) => {
        console.log('Formulário enviado:', formHero);
        try {
            const response = await axios.post('http://localhost:3001/hero/', formHero);
            console.log('Herói criado:', response.data);
            setFormHero({
                civilName: '',
                heroName: '',
                age: 0,
                team: '',
                countryId: 0,
                powerId: 0,
            });
            onClose();
        } catch (error) {
            console.error('Erro ao criar herói:', error);
        }
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center animate-slideIn shadow-lg">
                    <div className="bg-white p-6 rounded-lg overflow-y-auto">
                        <h2 className="text-2xl mb-4">Adicionar Membro</h2>
                        <form onSubmit={criarHeroi} className="space-y-4 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold">Nome Civil:</label>
                                <input
                                    type="text"
                                    name="civilName"
                                    value={formHero.civilName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Digite o nome civil"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">Nome do Herói:</label>
                                <input
                                    type="text"
                                    name="heroName"
                                    value={formHero.heroName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Digite o nome do herói"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">Idade:</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formHero.age}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Digite a idade"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">Time:</label>
                                <input
                                    type="text"
                                    name="team"
                                    value={formHero.team}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Digite o time"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">País:</label>
                                <select
                                    name="countryId"
                                    value={String(formHero.countryId)}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                >
                                    <option value="0">Selecione um país</option>
                                    {country.map((c) => (
                                        <option key={c.id} value={String(c.id)}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">Poder:</label>
                                <select
                                    name="powerId"
                                    value={String(formHero.powerId)}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                >
                                    <option value="0">Selecione um poder</option>
                                    {powers.map((p) => (
                                        <option key={p.id} value={String(p.id)}>
                                            {p.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex gap-2 justify-end mt-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={!isFormValid()}
                                    className={`px-4 py-2 rounded text-white ${
                                        isFormValid()
                                            ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                            : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    Adicionar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}