import express from "express";

const router = express.Router();


// controllers
import { random} from "../controllers/random.js";

router.get("/random-number", random);



export default router;