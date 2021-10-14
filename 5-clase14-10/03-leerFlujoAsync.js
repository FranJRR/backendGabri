//import { readFile } from 'fs';
const { readFileSync } = require('fs');
const path = require('path');

readFileSync(path.resolve(__dirname, './hola.txt'), 'utf-8');
