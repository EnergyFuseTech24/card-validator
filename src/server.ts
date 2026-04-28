import app from "./app";
import dotenv from "dotenv";
import path from "path";

// Force correct path
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});