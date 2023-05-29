// 4. Zaprojektować i zakodować REST API z wykorzystaniem frameworka Express.js które pozwoli na
//  stworzenie (zapisanie), przeglądanie, aktualizowanie oraz usuwanie przepisów kulinarnych.

// Dodatkowo:
// API musi posiadać obsługę błędów (zwracanie poprawnych statusów HTTP).
// Powinny być użyte odpowiednie metody HTTP.
// Może być typowanie z TypeScript.
// Logiczna struktura plików i komponentów.
// Do przechowywania danych można użyć dowolnej bazy danych bądź np. lokalny plik JSON

const express = require("express");
const app = express();
const config = require("./src/configs/db.config");
const { router } = require("./src/routes/recipes");

app.use(router);

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});
