import express from 'express';
import authRoutes from "./routes/auth.route.js";
import annonceRoutes from './routes/annonce.route.js';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/annonces", annonceRoutes)

app.get("/", (req,res) => {
    res.send(`<h1> Mon appli </h1>`)
})

app.listen(PORT, () => {
    console.log(`le serveur tourne sur http://localhost:${PORT}`);
    
})