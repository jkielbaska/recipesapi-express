// 4. Zaprojektować i zakodować REST API z wykorzystaniem frameworka Express.js które pozwoli na
//  stworzenie (zapisanie), przeglądanie, aktualizowanie oraz usuwanie przepisów kulinarnych.

// Dodatkowo:
// API musi posiadać obsługę błędów (zwracanie poprawnych statusów HTTP).
// Powinny być użyte odpowiednie metody HTTP.
// Może być typowanie z TypeScript.
// Logiczna struktura plików i komponentów.
// Do przechowywania danych można użyć dowolnej bazy danych bądź np. lokalny plik JSON

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const config = require("./src/configs/db.config");
// const recipesRoutes = require("./src/routes/recipes");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(recipesRoutes);

// app.listen(config.port, () => {
//   console.log(`App is listening on port ${config.port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require("./src/configs/db.config");
const { router } = require("./src/routes/recipes");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});

// const express = require("express");
// const { promises: fsPromises } = require("fs");
// const { v4: uuid } = require("uuid");
// const port = 3000;

// let recipes = [];
// const recipesFile = "recipes.json";

// const app = express();
// app.use(express.json()); //przez to json bedzie czytalny dla expressa//middleware to support json

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// fsPromises
//   .readFile(recipesFile)
//   .then((data) => {
//     recipes = JSON.parse(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// app.get("/recipes", async (req, res) => {
//   try {
//     const data = await fsPromises.readFile(recipesFile);
//     recipes = JSON.parse(data);
//     res.json(Object.values(recipes));
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// app.get("/recipes/:id", async (req, res) => {
//   try {
//     const data = await fsPromises.readFile(recipesFile);
//     recipes = JSON.parse(data);
//     const recipe = recipes[req.params.id];
//     if (recipe) {
//       res.json(recipe);
//     } else {
//       res.status(404).send("Recipe not found");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// app.post("/recipes", async (req, res) => {
//   try {
//     const data = await fsPromises.readFile(recipesFile);
//     recipes = JSON.parse(data);
//     const newRecipe = req.body;
//     newRecipe.id = uuid();
//     recipes[newRecipe.id] = newRecipe;
//     await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//     res.status(201).json(newRecipe);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// app.put("/recipes/:id", async (req, res) => {
//   try {
//     const data = await fsPromises.readFile(recipesFile);
//     recipes = JSON.parse(data);
//     const recipe = recipes[req.params.id];
//     if (recipe) {
//       recipes[req.params.id] = { ...recipe, ...req.body };
//       await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//       res.json(recipes[req.params.id]);
//     } else {
//       res.status(404).send("Recipe not found");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// app.delete("/recipes/:id", async (req, res) => {
//   try {
//     const data = await fsPromises.readFile(recipesFile);
//     recipes = JSON.parse(data);
//     const deletedRecipe = recipes[req.params.id];
//     if (deletedRecipe) {
//       delete recipes[req.params.id];
//       await fsPromises.writeFile(recipesFile, JSON.stringify(recipes));
//       res.json(deletedRecipe);
//     } else {
//       res.status(404).send("Recipe not found");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

//
//
//

// app.get('/recipes', (req, res) => {
//   try {
//       res.json(recipes);
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });

// app.get('/recipes/:id', (req, res) => {
//   try {
//       const recipe = recipes.find(r => r.id === req.params.id);
//       if (recipe) {
//           res.json(recipe);
//       } else {
//           res.status(404).send('Recipe not found');
//       }
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });

// app.post('/recipes', (req, res) => {
//   try {
//       const recipe = req.body;
//       recipes.push(recipe);
//       fs.writeFile(recipesFile, JSON.stringify(recipes), (err) => {
//           if (err) throw err;
//           res.status(201).json(recipe);
//       });
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });

// app.put('/recipes/:id', (req, res) => {
//   try {
//       const recipe = recipes.find(r => r.id === req.params.id);
//       if (recipe) {
//           recipe.name = req.body.name;
//           recipe.ingredients = req.body.ingredients;
//           recipe.instructions = req.body.instructions;
//           fs.writeFile(recipesFile, JSON.stringify(recipes), (err) => {
//               if (err) throw err;
//               res.json(recipe);
//           });
//       } else {
//           res.status(404).send('Recipe not found');
//       }
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });

// app.delete('/recipes/:id', (req, res) => {
//   try {
//       const recipe = recipes.find(r => r.id === req.params.id);
//       if (recipe) {
//           recipes = recipes.filter(r => r.id !== req.params.id);
//           fs.writeFile(recipesFile, JSON.stringify(recipes), (err) => {
//               if (err) throw err;
//               res.status(204).send();
//           });
//       } else {
//           res.status(404).send('Recipe not found');
//       }
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });
//dotąd

// app.get("/recipes", (req, res) => {
//   try {
//     fs.readFile("recipes.json", "utf8", (err, data) => {
//       res.send(data);
//     });
//   } catch (err) {
//     res.status(err).send(err);
//   }
// });

// app.get("/recipes/:id", (req, res) => {
//   try {
//     fs.readFile("recipes.json", "utf8", (err, data) => {
//       const recipes = JSON.parse(data);
//       const recipe = recipes.find(
//         (recipe) => recipe.id === parseInt(req.params.id)
//       );
//       if (recipe) {
//         res.send(recipe);
//       } else {
//         res.status(404).send("Nie znaleziono przepisu");
//       }
//     });
//   } catch (err) {
//     res.status(err).send(err);
//   }
// });

//app.post to add recipe to recipes.json file
// app.post("/recipes", (req, res) => {
//   try {
//     fs.readFile("recipes.json", "utf8", (err, data) => {
//       const recipes = JSON.parse(data.recipes);
//       const recipe = req.body;
//       recipe.id = uuid();
//       recipes.push(recipe);
//       fs.writeFile("recipes.json", JSON.stringify(recipes), (err) => {
//         if (err) throw err;
//         res.send(recipe);
//       });
//     });
//   } catch (err) {
//     res.status;
//   }
// });

// app.post("/recipes", async (req, res) => {
//   const id = uuid();
//   const content = req.body.recipes;

//   if (!content) {
//     res.status(400).send("Nie podano treści przepisu");
//   }

//   // const recipe = {
//   //   recipe_name,
//   //   ingredients,
//   //   instructions,
//   //   difficulty,
//   // };

//   await fs.mkdir("data/recipes", { recursive: true }); //tworzy folder jak go nie ma
//   await fs.writeFile(`data/recipes/${id}.txt`, content);

//   console.log(id);
//   res.sendStatus(201); //201 - created
// });

// app.post("/recipes", (req, res) => {
//   try {
//     fs.readFile("recipes.json", "utf8", (err, data) => {
//       const recipes = JSON.parse(data);
//       const recipe = req.body;
//       recipe.id = uuid();
//       recipes.push(recipe);
//       fs.writeFile("recipes.json", JSON.stringify(recipes), (err) => {
//         if (err) throw err;
//         res.send(recipe);
//       });
//     });
//   } catch (err) {
//     res.status;
//   }
// });

// app.post("/recipes", (req, res) => {
//   fs.readFile("recipes.json", (err, data) => {
//     if (err) throw err;
//     let recipes = JSON.parse(data);
//     let recipe = req.body.recipes;
//     recipes.push(recipe);
//     fs.writeFile("recipes.json", JSON.stringify(recipes), (err) => {
//       if (err) throw err;
//       res.send(recipe);
//     });
//   });
// });

// app.put("/recipes/:id", (req, res) => {
//   fs.readFile("recipes.json", (err, data) => {
//     if (err) throw err;
//     let recipes = JSON.parse(data);
//     let recipe = recipes.find(
//       (recipe) => recipe.id === parseInt(req.params.id)
//     );
//     if (recipe) {
//       recipe.name = req.body.name;
//       recipe.ingredients = req.body.ingredients;
//       recipe.description = req.body.description;
//       fs.writeFile("recipes.json", JSON.stringify(recipes), (err) => {
//         if (err) throw err;
//         res.send(recipe);
//       });
//     } else {
//       res.status(404).send("Nie znaleziono przepisu");
//     }
//   });
// });

// app.delete("/recipes/:id", (req, res) => {
//   fs.readFile("recipes.json", (err, data) => {
//     if (err) throw err;
//     let recipes = JSON.parse(data);
//     let recipe = recipes.find(
//       (recipe) => recipe.id === parseInt(req.params.id)
//     );
//     if (recipe) {
//       recipes = recipes.filter(
//         (recipe) => recipe.id !== parseInt(req.params.id)
//       );
//       fs.writeFile("recipes.json", JSON.stringify(recipes), (err) => {
//         if (err) throw err;
//         res.send(recipe);
//       });
//     } else {
//       res.status(404).send("Nie znaleziono przepisu");
//     }
//   });
// });
