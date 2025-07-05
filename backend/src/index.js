import express from 'express';
import cors from 'cors';

import studentRoute from './routes/studentRoute.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Backend!</h1>');
// })

app.use('/api', studentRoute)

app.listen(port, () => {
    console.log("Listening on port ", port)
})

