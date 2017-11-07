/* Métodos para seleccionar elementos del DOM (Nodos del tipo 1)
document.getElementById() // Nodo del tipo elemento que coincida con el id inidcado
document.getElementsByTagName() //Colección de elementos HTML
document.getElementsByClassName() //Colección de elementos HTML
document.querySelector() // Primer elemento que cumpla con la condición
document.querySelectorAll() // Todos los elementos que cumplan con la condición
*/

// Seleccionando al primer nodo de tipo elemento cuyo atributo id es title

var title = document.querySelector('#title');
console.log(title);
console.log(title.firstChild);

// Seleccionando al primer nodo de tipo elemento cuyo atributo id es navbar

var navbar = document.querySelector('#navbar');
console.log(navbar);

// Seleccionando al primer nodo de tipo elemento cuyo atributo de clase es item
var item = document.querySelector('.item');
console.log(item);

// Seleccionando a todos los nodos de tipo elemento cuyo atributo id es title

var listItem = document.querySelectorAll('.item');
console.log(listItem);
/*
// Seleccionando al nodo de tipo elemento h1 mediante su atributo id title

var title = document.getElementById('title');
console.log(title);

// Mostrando en consola al primer nodo hijo de title

console.log(title.firstChild);

// Seleccionando a todos los nodos de tipo elemento a

var linksList = document.getElementsByTagName('a');
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

// Seleccionando a todos los nodos de tipo elemento con el atributo de clase item

var itemsList = document.getElementsByClassName('item');
console.log(itemsList);
console.log(itemsList[4]);
console.log(itemsList[4].firstElementChild);
console.log(itemsList[4].firstElementChild.firstChild);
*/
