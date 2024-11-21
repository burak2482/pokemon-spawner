import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [pokemons, setPokemons] = useState([]);

  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [element, setElement] = useState('');

  // Fetch all pokemons when component mounts
  const fetchPokemons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pokemon');
        console.log(response.data);
        setPokemons(response.data);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    useEffect(() => {
      fetchPokemons();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const newPokemon = {
        name,
        alias,
        element,
      };
      
      if (!name || !alias || !element) {
        console.error('All fields are required!');
        return;
      }
      
      try {
        const response = await axios.post('http://localhost:5000/api/pokemon', newPokemon);
        console.log('Added Pokemon:', response.data);
  
        // Update local state with the new pokemon
        setPokemons((prev) => [...prev, response.data]);
  
        // Clear input fields after successful submission
        setName('');
        setAlias('');
        setElement('');
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
      }
    };
  

  return (
    <main className="flex flex-col justify-center items-center bg-slate-400 min-h-screen">
      <section className="flex flex-col justify-center items-center h-1/4 w-1/4 py-24 px-44 bg-slate-500 rounded-3xl">
        <h1 className="font-semibold text-3xl mb-10 text-nowrap">Pokemon Spawner</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 bg-slate-500 text-black">
          <label>Pokemon Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Pokemon alias</label>
          <input type="text" value={alias} onChange={(e) => setAlias(e.target.value)} />
          <label>Pokemon Elements</label>
          <select value={element} onChange={(e) => setElement(e.target.value)}>
            <option value="">Select Element</option>
            <option value="Earth">Earth</option>
            <option value="Fire">Fire</option>
            <option value="Air">Air</option>
            <option value="Water">Water</option>
            <option value="Dark">Dark</option>
          </select>
          <button type="submit" className="font-medium text-xl py-3 px-16 text-nowrap bg-slate-600 mt-3 rounded-full">Add Pokemon</button>
        </form>
      </section>
      <section className="flex justify-center items-center w-full h-full">
      <div className="flex items-center justify-center h-full w-1/4 rounded mt-7">
      <table className="table w-1/4 h-full bg-white">
          <thead className="">
            <tr className="">
              <th className="border py-3 md:py-6text-center">Name</th>
              <th className="border py-3 md:py-6 text-center">Alias</th>
              <th className="border py-3 md:py-6 text-center">Element</th>
              <th className="border py-3 md:py-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {pokemons && pokemons.length > 0 ? (
              pokemons.map((pokemon) => (
                <tr>
                  <td className="border px-2 md:px-9 font-semibold py-2 md:py-4">{pokemon.name}</td>
                  <td className="border px-2 md:px-9 font-semibold py-2 md:py-4">{pokemon.alias}</td>
                  <td className="border px-2 md:px-9 font-semibold py-2 md:py-4">{pokemon.element}</td>
                  <td className="flex border md:px-9 px-2 py-2 md:py-4 flex-nowrap"><button className="px-3 py-1 rounded md:px-6 md:py-2 bg-black text-white font-semibold text-sm mr-4">Edit</button><button className="px-3 py-1 rounded md:px-6 md:py-2 font-semibold bg-black text-white text-sm mr-4">Delete</button></td>
                </tr>
              ))
            ) : (
              <li>No pokemons available</li>
            )}
          </tbody>
        </table>
      </div>
        </section>
    </main>
  );
}
