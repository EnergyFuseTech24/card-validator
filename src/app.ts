import express from "express";
import cardRoutes from "./routes/card.route";
const app = express();
app.use(express.json());

app.use("/api", cardRoutes);

export default app;