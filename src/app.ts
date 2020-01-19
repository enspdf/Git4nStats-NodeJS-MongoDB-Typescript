import express from "express";
import morgan from "morgan";

const app = express();

import usersRoute from "./routes/usersRoute";

app.set("port", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", usersRoute);

export default app;