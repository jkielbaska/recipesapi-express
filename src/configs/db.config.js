module.exports = {
  port: process.env.PORT || 3000,
  //   db: {
  //     host: process.env.DB_HOST || "localhost",
  //     user: process.env.DB_USER || "root",
  //     password: process.env.DB_PASSWORD || "password",
  //     name: process.env.DB_NAME || "mydb",
  //   },
  //   jwtSecret: process.env.JWT_SECRET || "secret",
  recipesFile: process.env.RECIPES_FILE || "../data/recipes.json",
};
// apiKey: process.env.API_KEY || "api_key",
