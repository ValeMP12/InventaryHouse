import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import categoriaRoutes from './routes/Route.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', categoriaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
