import mongoose from 'mongoose';

const elements = ['Fire', 'Water', 'Earth', 'Air', 'Dark'];

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
    type: String,
    required: true,
  },
  element: {
    type: String,
    enum: elements,
    required: true,
  },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;
