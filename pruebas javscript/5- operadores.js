// operadores

// EJEMPLO 1 INCREMENTO/decremento
var num1 = 5;
    num1 = num1 + 3;/* usa como igual la anterior variable, y le suma 3 */
    num1++;

console.log(num1);

// ++ incrementa en 1 el valor, osea 9
// -- disminuye en 1, osea 7
// 

// EJEMPLO 2 DIVISION y residuo en en log

var num1 = 18;
console.log(num1 / 3);/* / para dividir */
/* con % puedes sacar el resuiduo ej; num 1 % 3); */

// EJEMPLO 3 operacion completa+booleanos?

var num1 = 2;
var num2 = 3;
var resultado = num1 * num2;/* o puedes usar / */
console.log(resultado)

/* LOS OPERADORES CLAVES SON: */
// al usar > mayor que 
//  al usar < menor que
// al usar <= menor o igual
// al usar >= mayor o igual
//  == igual a
//  != distinto a (escrito como ! = )

/* MAS OPERADORES LOGICOS */
// && = CUANDO CUMPLE TODAS LAS CONDICIONES TRUE, mismo valores
// || = CUANDO AL MENOS CUMPLE 1 CONDICION TRUE
/* tambien pueden ser considerados como booleanos*/

var resultado = num1 != num2;// si el valor es distinto volvera true


console.log(resultado)