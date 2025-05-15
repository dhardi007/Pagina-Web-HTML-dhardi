// CONDICIONALES

/* # IF - si, suele iniciar siempre
   # ELSE - entonces
   # ELSE-IF - si entonces, suele ir por el medio
   # SWITCH - cambio
*/

// EJEMPLO #1 - IF & ELSE
var a = 3;
// esto devolvera >= si es mayor o igual que 10
if (a >= 10 ) {/* false */
   console.log('SI ES MAYOR')/* si hubiera devueltro TRUE, imprime esto */
}/* sin ; */
// en caso de queno, entonces..
else{
   console.log('ES MENOR A 10')
};

// EJEMPLO #2 - else IF & almacenar variables `${}`
var b = 20;
var c = 40;
if (b > c) {
   // $ puede almacenar variables
   console.log(`${b} es mayor a: ${c}`)/* `` comillas invertidas */
} 
// agregame
else if(b == c){/* SI ENTONCES, es IGUAL == */
   console.log("c y d son iguales")
}


else {
   console.log(`${b} es menor a: ${c}`)/* `` es necesario para usar $ */
};

// EJEMPLO #3 - ||= OR (operadores logicos) &&= Y 

// &&
var x = true;
var y = false;
console.log(x && y);/* COMPLETAMENTE TRUE LAS CONDICIONES */
/* imprime false */

// repetimos
var x = true;
var y = true;
console.log(x && y);/* es igual */
/* imprime true */

// ||
var x = true;
var y = false;
console.log(x || y);/* CUMPLE UNA/s CONDICION */
/* imprime true  */

// EJEMPLO #4 complejo DE CHATGPT (opcional)
var edad = 25;
var tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
};

// EJEMPLO #5 - 3 variables
var a = 8
var b = 7;
var c = 6;
if(a > c && a > b) {
   console.log(`${a} es mayor a: ${c}`)
}
/* puedes ejecutar distinas variables, no tiene que ser la misma */
else{
   console.log(`${a} es mayor a: ${b}`)
};

// EJEMPLO #6 - cambio switch/opciones fácil
let curso = 'python';/* es el filtro de la opciones */

switch (curso) {
   /* las keys son opciones */
   case 'java':
      console.log("java");
      break;/* corta la opcion, inicia otro */
   case 'python':
      console.log("python3");
      break;
   case 'javascript':
      console.log('javascript');
      break;
      /* default es la opcion de salida, no disponible */
   default:
      console.log('no disponible');/* si usaras PHP en let curso saldria esto */
      break;
}
