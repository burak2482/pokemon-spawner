import express from 'express';
import Pokemon from '../models/model.js';
import dbConnect from '../database/db.js';

dbConnect();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, alias, element } = req.body;

  if (!name || !alias || !element) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPokemon = new Pokemon({ name, alias, element });
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation failed: Check input values', 
        error: err.errors 
      });
    }
    res.status(500).json({ message: 'Internal server error', error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pokemons', error: err });
  }
});


export default router;
