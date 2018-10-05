const express = require('express')
const app = express()
const port = 3000

app.get('/restaurants', (req, res) => {
  res.json([
    {id: 1, name: 'React Cafe', address: '123 Anywhere St', image: 'circle.png', rating: 5},
    {id: 2, name: 'Fancy Restaurant', address: '799 Main St', image: 'square.png', rating: 3.5},
    {id: 3, name: 'Taco Place', address: '550 Maple Rd', image: 'star.png', rating: 4.5},
    {id: 4, name: "Tony's Diner", address: '4101 College St', image: 'triangle.png', rating: 4},
    {id: 5, name: 'Pasta Central', address: '706 Harper St', image: 'circle.png', rating: 3},
    {id: 6, name: 'Burger Builder', address: '4869 Hamilton Dr', image: 'square.png', rating: 1.5},
    {id: 7, name: 'Pizza Express', address: '1049 Bird St', image: 'star.png', rating: 3.5},
    {id: 8, name: 'Teriyaki To Go', address: '1885 Tea Berry Lane', image: 'triangle.png', rating: 3},
    {id: 9, name: 'Maroon Deli', address: '1082 Stuart St', image: 'circle.png', rating: 4.5},
    {id: 10, name: 'Prime Bar and Grill', address: '1848 Fairfax Dr', image: 'square.png', rating: 4.5},
    {id: 11, name: 'Dumpling House', address: '747 Kelly Dr', image: 'star.png', rating: 5},
    {id: 12, name: 'Hot Chicken', address: '1816 Olive St', image: 'triangle.png', rating: 3.5},
    {id: 13, name: "Luna's Tap Room", address: '3256 Spirit Dr', image: 'circle.png', rating: 3},
    {id: 14, name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr', image: 'square.png', rating: 4.5},
    {id: 15, name: "Bobby's Burgers", address: '4152 Berkley St', image: 'star.png', rating: 5},
    {id: 16, name: 'Turnpike Diner', address: '4571 Central Ave', image: 'triangle.png', rating: 2.5},
    {id: 17, name: 'Bombay Express', address: '65 Queens Lane', image: 'circle.png', rating: 3.5},
    {id: 18, name: 'Coffee Central', address: '3228 Oakwood Circle', image: 'square.png', rating: 4.5},
    {id: 19, name: "King's Garden", address: '2935 Victoria Ct', image: 'star.png', rating: 5},
    {id: 20, name: 'Salads and More', address: '2454 Preston St', image: 'triangle.png', rating: 2},
  ])
})

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + "/shapes/" + req.params.image)
})

app.post('/review', (req, res) => {
  setTimeout(() => {
    res.json({ success: "OK" })
  }, 2000)
})

app.listen(port, () => console.log(`Restaurant app listening on port ${port}!`))
