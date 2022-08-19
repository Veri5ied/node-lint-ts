import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sampleRouter from "./routes/sample-route";
import errorHandler from "./middlewares/error-handler";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/sampe", sampleRouter);
app.use(errorHandler);
const start = (): void => {
  try {
    //import db connection here
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
