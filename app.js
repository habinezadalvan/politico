import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './server/routes/authRoutes';

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.get('/', (req, res) => res.status(200).json({message: "Welcome to politico"}));
app.use(authRoutes);
const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listening on ${port}`));
