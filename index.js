const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const recipe = require("./Data/data.json")
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! ')
});
app.get('/recipes', (req, res)=> {
    res.send(recipe);
})

app.get('/recipes/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const selectedRecipes=recipe.find(res=>res.id==id)
    res.send(selectedRecipes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})