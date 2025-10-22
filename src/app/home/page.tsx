"use client";
import { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import swal from "sweetalert2";

interface Hero {
  id: number;
  civilName: string;
  heroName: string;
  age: number;
  team?: string;
  countryId: number;
}
interface Country {
  id: number;
  name: string;
}

export default function homepage() {
  const [herois, setHeroes] = useState<Hero[]>([]); // Inicializar com array vazio
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heros = await axios.get('http://localhost:3001/hero/');
        console.log(heros.data);
        setHeroes(heros.data);
      } catch (error) {
        console.log('Erro ao buscar heróis:', error);
      }

    };

    fetchHeroes();

  }, []);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await axios.get('http://localhost:3001/country/');
        console.log(countries.data);
        setCountries(countries.data);
      } catch (error) {
        console.log('Erro ao buscar países:', error);
      }
    };

    fetchCountries();
  }, []);

  const excluirMembro = async (id: number) => {

    const resultado = await swal.fire({
      title: 'Tem certeza?',
      text: "Você está excluindo um herói",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
    });

    if (!resultado.isConfirmed) return;
    try {
      await axios.delete(`http://localhost:3001/hero/${id}`);

      setHeroes(herois.filter((hero) => hero.id !== id));
      swal.fire({
        icon: 'success',
        title: 'Heroi Excluido!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.log('Erro ao excluir membro:', error);
    }
  }


  function getCountryNameById(countryId: number): string | undefined {
    const country = countries.find((c) => c.id === countryId);
    return country ? country.name : undefined;
  }
  return (
    <>
      <Header />
      <div>
        <div className="flex justify-between items-center mx-auto w-11/12 md:w-3/4 lg:w-2/3 mt-8 mb-4">
          <h2 className="p-2 text-2xl  ">Heroes</h2>
        <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 "
          onClick={() => { }}
        >Adicionar Membro</button>
        </div>
        
        <table className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl border border-gray-200 table-auto border-separate border-spacing-x-6 border-spacing-y-3 text-sm">
          <thead>
            <tr>
              <th>Nome Civil</th>
              <th>Nome do Herói</th>
              <th>Idade</th>
              <th>Time</th>
              <th>País</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {herois.length > 0 ? (
              herois.map((hero) => (
                <tr key={hero.id}>
                  <td>{hero.civilName}</td>
                  <td>{hero.heroName}</td>
                  <td>{hero.age}</td>
                  <td>{hero.team}</td>
                  <td>{getCountryNameById(hero.countryId)}</td>
                  <td>
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                      onClick={() => excluirMembro(hero.id)}
                    >Excluir Membro</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Nenhum herói encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}