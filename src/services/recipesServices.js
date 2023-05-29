const { promises: fsPromises } = require("fs");
const recipesFile = "../data/recipes.json";

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
