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
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add Pokemon</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)} // Kullanıcı adı girerken state güncelleniyor
            />
          </div>
          <div>
            <label>Alias</label>
            <input
              type="text"
              placeholder="Enter alias"
              className="form-control"
              value={alias}
              onChange={(e) => setAlias(e.target.value)} // Kullanıcı alias girerken state güncelleniyor
            />
          </div>
          <div>
            <label>Elements</label>
            <select
              value={element}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
