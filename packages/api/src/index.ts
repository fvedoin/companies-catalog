import express from 'express';
import cors from 'cors';
import router from './routes/companies.route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Express API is running on http://localhost:${PORT}`);
});
