// const express = require("express");
const { promises: fsPromises } = require("fs");
const recipesFile = "../data/recipes.json";
// const { v4: uuid } = require("uuid");
// const port = 3000;

const getRecipes = async () => {
  const data = await fsPromises.readFile(recipesFile);
  const recipes = JSON.parse(data);
  return Object.values(recipes);
};

const getRecipe = async (id) => {
  const data = await fsPromises.readFile(recipesFile);
  const recipes = JSON.parse(data);
  return recipes[id];
};

const createRecipe = async (recipe) => {
  const data = await fsPromises.readFile(recipesFile);
  const recipes = JSON.parse(data);
  recipe.id = uuid();
  recipes[recipe.id] = recipe;
  await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
  return recipe;
};
const updateRecipe = async (id, recipe) => {
  const data = await fsPromises.readFile(recipesFile);
  const recipes = JSON.parse(data);
  recipes[id] = { ...recipes[id], ...recipe };
  await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
  return recipes[id];
};

const deleteRecipe = async (id) => {
  const data = await fsPromises.readFile(recipesFile);
  const recipes = JSON.parse(data);
  delete recipes[id];
  await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
  return true;
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};

// fsPromises
//   .readFile(recipesFile)
//   .then((data) => {
//     recipes = JSON.parse(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// app.get("/recipes", async (req, res) => {
//     try {
//       const data = await fsPromises.readFile(recipesFile);
//       recipes = JSON.parse(data);
//       res.json(Object.values(recipes));
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(err);
//     }
//   });

//   app.get("/recipes/:id", async (req, res) => {
//     try {
//       const data = await fsPromises.readFile(recipesFile);
//       recipes = JSON.parse(data);
//       const recipe = recipes[req.params.id];
//       if (recipe) {
//         res.json(recipe);
//       } else {
//         res.status(404).send("Recipe not found");
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(err);
//     }
//   });

//   app.post("/recipes", async (req, res) => {
//     try {
//       const data = await fsPromises.readFile(recipesFile);
//       recipes = JSON.parse(data);
//       const newRecipe = req.body;
//       newRecipe.id = uuid();
//       recipes[newRecipe.id] = newRecipe;
//       await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//       res.status(201).json(newRecipe);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(err);
//     }
//   });

//   app.put("/recipes/:id", async (req, res) => {
//     try {
//       const data = await fsPromises.readFile(recipesFile);
//       recipes = JSON.parse(data);
//       const recipe = recipes[req.params.id];
//       if (recipe) {
//         recipes[req.params.id] = { ...recipe, ...req.body };
//         await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//         res.json(recipes[req.params.id]);
//       } else {
//         res.status(404).send("Recipe not found");
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(err);
//     }
//   });

//   app.delete("/recipes/:id", async (req, res) => {
//     try {
//       const data = await fsPromises.readFile(recipesFile);
//       recipes = JSON.parse(data);
//       const deletedRecipe = recipes[req.params.id];
//       if (deletedRecipe) {
//         delete recipes[req.params.id];
//         await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//         res.json(deletedRecipe);
//       } else {
//         res.status(404).send("Recipe not found");
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send(err);
//     }
//   });

//   app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
//   });
