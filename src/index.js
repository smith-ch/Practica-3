const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

// Exportar app para pruebas, iniciar servidor solo si no estamos en test
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
  });
}

module.exports = app;
