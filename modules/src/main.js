import obtenerUsuario from './defaultExport.js';
import './emptyExport.js';
import { getPosts, name as importedName } from './nameExports.js';

const name = 'some name';
console.log(importedName);
console.log(getPosts());
console.log(obtenerUsuario());

// import * as data from './nameExports.js'
// console.log(data.name)
// console.log(data.getPosts())
