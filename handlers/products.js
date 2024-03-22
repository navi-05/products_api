import data from '../data.json' assert { type: 'json' }
const products = Object.entries(data)[0][1]

// I'm handling all my requests inside my handlers folder

// * GET
// ? All products
export const getAllProducts = (req, res) => {
  res.send(products)
}

// * GET
// @ param id
// ? Indv Product
export const getProductById = (req, res) => {
  const { id } = req.params
  const desiredProduct = products.find((product) => product.id == id)  
  res.send(desiredProduct)
}

// * POST
// ? Creates a product
export const createProduct = (req, res) => {
  const { title, desc } = req.body;
  let newProducts = [...products]
  newProducts.push({
    id: newProducts.length + 1,
    title: title,
    description: desc
  })
  res.send(newProducts[newProducts.length - 1])
}