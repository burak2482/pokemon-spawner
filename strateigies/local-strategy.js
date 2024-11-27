/*import passport from "passport";
import { Strategy } from "passport-local";
import Pokemon from "../utils/models/model";

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) {
  try {
    const findPokemon = await Pokemon.findById(id)
    if(!findPokemon) throw new Error("Pokemon not found")
    done(null, findPokemon);
  } catch (err) {
    done(err, null)
  }
});

passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const findPokemon = await Pokemon.findOne({username})
      if(!findPokemon) throw new Error("Pokemon username not found")
      if(!comparePassword())
    }
  })
)*/