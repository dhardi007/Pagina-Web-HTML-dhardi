// EJEMPLO 1
// valor unico con let
let nombre1 = 'Diego';
var nombre = 'Maria';
// var son variables, por eso imprimira la ultima asignada, osea "Mariaa'

var nombre = 'Mariaa';

// console.log(nombre);

// EJEMPLO 2
var x = 15;
var y = 30;
var suma = x+y;

// console.log(suma)

// EJEMPLO 3

// concatenar=unir palabras/variables. El espacio en + es clave.
var x = 'diego'+'  '+'samuel';

// console.log(x);

// EJEMPLO 4

// tildes invertidas `` es estético - invocamos variables tmb con $
var nombre = 'diego';
var años = 20;

var datos = `mi nombre es ${nombre} y tengo ${años} años`;

// console.log(datos);

// EJEMPLO 5


// const asi como let es un valor único, pero que no puede cambiar/re asignar
const PI = 3.14;
// const PI = 3.13; // no es posible
console.log(PI);
