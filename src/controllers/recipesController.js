const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../services/recipesServices");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipe(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// obsluga bledu zlych pol
const createNewRecipe = async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// obsluga bledu zlych pol
const updateExistRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await updateRecipe(id, req.body);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteExistRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await deleteRecipe(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getSingleRecipe,
  createNewRecipe,
  updateExistRecipe,
  deleteExistRecipe,
};
