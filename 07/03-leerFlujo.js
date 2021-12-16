//import { readFile } from 'fs';
const { readFile } = require('fs');
const path = require('path');
// __dirname dices la ruta del fichero actual
readFile(path.resolve(__dirname, './hola.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
