import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.routes.js";
import toysRouter from "./routes/toys.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 8080;

//ROUTES
app.get("/home", (req, res) => {
  res.json({ message: "WELCOME HOME" });
});
app.use("/api/toys", toysRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Escuhando al puerto ${PORT}`);
});
