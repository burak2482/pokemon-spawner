import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import updatePokemonRouter from "./routes/pokemonupdateroute.js";
import userRouter from "./routes/loginRouter.js";
// import { requireAuth } from "../middleware/requireAuth.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};


app.use(cors(corsOptions));
app.use(express.json());

// app.use(requireAuth)



app.use('/api/pokemon', router);
app.use('/pokemon-update', updatePokemonRouter);
app.use('/user', userRouter);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
