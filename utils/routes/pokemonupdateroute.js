import express from 'express';
import Pokemon from '../models/model.js';
import dbConnect from '../database/db.js';

dbConnect();

const router = express.Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, alias, element } = req.body;

  console.log('Request body:', req.body);
  console.log('Request params:', req.params); 

  try {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(
      id,
      { name, alias, element },
      { new: true }
    );
    if (!updatedPokemon) {
      return res.status(404).json({ message: 'Pokemon not found' });
    }
    res.json(updatedPokemon);
  } catch (err) {
    res.status(500).json({ message: 'Error updating Pokemon', error: err });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; // URL'deki id'yi al
  try {
    const pokemon = await Pokemon.findById(id); // Veritabanından ID'ye göre pokemon bul
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokemon not found' }); // Pokemon yoksa 404 döndür
    }
    res.json(pokemon); // Pokemon'u JSON olarak döndür
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pokemon', error }); // Hata varsa 500 döndür
  }
});

router.delete('/delete/:id', async (req, res) => {
  const {id} = req.params
  try {
    await Pokemon.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
  }
});

export default router;