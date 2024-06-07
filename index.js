import "dotenv/config";
import express from "express";
import Route from "./routes/Route.js";
import cors from "cors";

const app = express();
app.use(express.static('quasar-front/dist'));
app.use(express.json());

const port = process.env.PORT || 8085;


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.status(200).send('Okay');
    res.json({message: "ok"});
});

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use('/api', Route);

app.listen(port, () => {
    console.log(`App corriendo en el puerto: ${port}`);
});