import express from 'express';
import User from '../models/userModel.js';
import dbConnect from '../database/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

dbConnect();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}
const router = express.Router();

router.post("/login", async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

router.post("/signup", async (req, res) => {
  const {email, password } = req.body

  try {
    const user = await User.signup(email, password)

    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

export default router;
