import express from 'express'
import cors from 'cors'


import productRouter from './routes/products.js';
import recipesRouter from './routes/recipes.js';
import quotesRouter from './routes/quotes.js';

const app = express();

// MIDDLEWARES
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use('/products', productRouter)
app.use('/recipes', recipesRouter)
app.use('/quotes', quotesRouter)

app.listen(3000, () => console.log("SERVER STARTED"))
