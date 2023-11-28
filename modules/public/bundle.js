'use strict';

const obtenerUsuario = () => {
  return {
    nombre: 'Ivan',
    correo: 'ivan@correo.com',
  };
};

console.log('esto es un emptyexport');

const name = 'Ivan';

const getPosts = () => ['post1', 'post2', 'post3'];

// const name = 'Ivan';

// const getPosts = () => ['post1', 'post2', 'post3'];

// export { getPosts, name };

console.log(name);
console.log(getPosts());
console.log(obtenerUsuario());

// import * as data from './nameExports.js'
// console.log(data.name)
// console.log(data.getPosts())
