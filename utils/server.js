import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};


app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/pokemon', router);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});