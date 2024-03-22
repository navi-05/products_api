import axios from 'axios'
const baseUrl = 'https://dummyjson.com/recipes'

// * GET
// ? All recipe
export const getAllRecipes = async (req, res) => {

  // Fetching my data from DummyJSON API
  const data = await axios.get(baseUrl, {
    limit: "5"
  })
  const recipes = data.data.recipes

  res.send(recipes)
}


// * GET
// @ param id
// ? Indv recipe
export const getRecipeById = async (req, res) => {
  const { id } = req.params
  const data = await axios.get(`${baseUrl}/${id}`)
  const recipe = data.data

  res.send(recipe)
}