import React, { useState } from 'react';

export default function PokemonUpdate() {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [element, setElement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, alias, element });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-svh w-full h-full bg-slate-100">
      <div className="flex flex-col w-1/4 h-1/4 py-10 px-60 justify-center items-center bg-slate-300 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <h2 className="font-semibold text-3xl text-center">Add Pokemon</h2>
          <div className="flex flex-col mt-5">
            <label className="font-semibold text-xl">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="border border-x-2 px-10 text-left mt-2 font-semibold"
              value={name}
              onChange={(e) => setName(e.target.value)} // Kullanıcı adı girerken state güncelleniyor
            />
          </div>
          <div  className="flex flex-col mt-5">
            <label className="font-semibold text-xl">Alias</label>
            <input
              type="text"
              placeholder="Enter alias"
              className="border border-x-2 px-10 text-left mt-2 font-semibold"
              value={alias}
              onChange={(e) => setAlias(e.target.value)} // Kullanıcı alias girerken state güncelleniyor
            />
          </div>
          <div className="flex flex-col mt-5">
            <label  className="font-semibold text-xl mb-2">Elements</label>
            <select
              value={element} className="border border-x-2 px-10 text-left mt-2 font-semibold"
              onChange={(e) => setElement(e.target.value)} // Kullanıcı element seçerken state güncelleniyor
            >
              <option value="">Select Element</option>
              <option value="Earth">Earth</option>
              <option value="Fire">Fire</option>
              <option value="Air">Air</option>
              <option value="Water">Water</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
          <button type="submit" className="px-10 py-2 rounded-full font-semibold bg-slate-500 mt-7 text-white ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
