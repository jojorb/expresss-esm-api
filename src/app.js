import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./api";
import middlewares from "./middlewares";



const app = express();
app.set("trust proxy", 1);

app.use(morgan("combined"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "dispatching...",
  });
});

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
