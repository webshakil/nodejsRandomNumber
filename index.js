import morgan from "morgan";
import maxminRoutes from "./routes/random.js";
import express from 'express';

const app = express();
// middlewares
app.use(express.json());
// router middleware
app.use("/api", maxminRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
