
const containerDiv = document.getElementById("container")
containerDiv.classList.add('containerStyles')

const getAllButton = document.getElementById("getAll")

const getByIdForm = document.getElementById('getById')

const addNewForm = document.getElementById('addNew')

getAllButton.addEventListener('click', () => {
  fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(products => generateUI(products))
})

getByIdForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target[0].value;

  fetch(`http://localhost:3000/products/${id}`)
    .then(res => res.json())
    .then(product => generateUI(product))
})

addNewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e)
  
  const title = e.target[0].value
  const description = e.target[1].value

  fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      desc: description
    })
  }).then(res => res.json()).then(data => generateContent(data))
})


// & UI GEN
function generateUI(products) {
  (products.length > 1) 
    ? products.map((product) => generateContent(product)) 
    : generateContent(products)
}

function generateContent(product) {
  const heading = document.createElement("h1")
  heading.innerHTML = product.title

  const para = document.createElement("p")
  para.innerHTML = product.description
  para.classList.add('para')

  containerDiv.appendChild(heading)
  containerDiv.appendChild(para)
}


