// EJEMPLO 1

// \n crea un espacio entre rojo y verde
let color = "rojo \n \n \n verde";

console.log(color);

// EJEMPLO 2
let fruta = 'manzana';

console.log(fruta.toLowerCase()); /* MINUSCULA */
console.log(fruta.toUpperCase());/* MAYUSCULA

console.log(fruta.length);/* cuenta los caracteres */
    


// EJEMPLO 3
let curso = 'javascript';/* variable */

console.log(curso.slice(2,5)); /* seleccionamos por numero y recortamos de x-hasta-y */
console.log(curso.slice('-')); /* '-' () para tomar en cuenta toda la variable */
console.log(curso.slice(',')); /* ',' () para separar en  palabras */


// EJEMPLO 4
// CONVERTIR

var numero1 = '1';
var numero2 = '3';

console.log(numero1 + numero2); /* en vez de sumar, concatenear osea los une, formando 13 */
console.log(Number(numero1) + Number(numero2)); /* asi lo convertirmos a tipo numer y lo sumamos de verdad */
