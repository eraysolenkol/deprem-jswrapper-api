import express from 'express';
import cors from 'cors';
import earthquakeRoute from './routes/earthquake.route.js';

const PORT = 5050;
const app = express();
app.use(cors());

app.use("/api/v1", earthquakeRoute);


app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/`);
});