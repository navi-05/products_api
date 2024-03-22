import express from 'express'
import { getAllRecipes, getRecipeById } from '../handlers/recipes.js';

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes)
recipesRouter.get('/:id', getRecipeById)

export default recipesRouter