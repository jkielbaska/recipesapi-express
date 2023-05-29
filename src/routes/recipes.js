const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router.get("/", recipesController.getAllRecipes);
router.get("/:id", recipesController.getSingleRecipe);
router.post("/", recipesController.createNewRecipe);
router.put("/:id", recipesController.updateExistRecipe);
router.delete("/:id", recipesController.deleteExistRecipe);

module.exports = { router };
