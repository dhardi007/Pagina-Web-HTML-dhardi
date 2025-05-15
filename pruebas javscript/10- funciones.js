// un bloque de codigo que se ejecuta cuando lo llamen.

// funcion sencilla, suma
function suma(a,b) {/* en los () va el parametro/argumento, en este caso a, b */
    var sum = a*b;/* variable DECLARANDO una multiplicacion */
    console.log('la suma es: '+ sum)/* concatenamos */
}
// llamamos la funcion, en este caso {suma}
suma(72,8);



// EJEMPLO #1 FUNCIONES RETORNABLES - con retorno

function dato_trabajador() {/* parametro vacio porque espera recibir CLIENTES... distintas variables*/
    var salario = 2500;/* asigamos una valor en una var DECLARANDO */
    /* marca con una interrupcion en Visual SC */console.log("su salario es: "+ salario);/* concatenar */
    return salario; /* devuelve/retorna salario */
}

// creames el cliente y lo llamamos..
var obrero = dato_trabajador();
console.log(obrero);/* imprime el salario de este cliente */

// INTERRUPCIONNNN: return se imprime despues porque va despues del console.log

/* o podemos llamar la variable directamente */
dato_trabajador();

// EJEMPLO #2 FUNCIONES CON FLECHAS (anonimas)   

var resta = function/* guardamos una funcion en una variable */ (n1,n2) {/* la funcion no lleva nombre, directamente params */
    return n1 - n2;
}/* cerramos corchetes/llaves */
// imprime
console.log(resta(300,230));/* ingresamos los 2 numeros*/

// la forma de hacerlo sin funcion anonima, CON FLECHAS
var resta = (n1,n2) =>/* es */ n1 - n2;

console.log(resta(300,230));/* ingresamos los 2 numeros*/

// ambos imprimen 70

// #otro ejemplo.1# imprimir la funcion sin parametros, con return
var nombre = function(){/* no tiene parametro, ni nombre */
    return "juan";/* pero devuelve juan */
}
console.log(nombre());/* llamas a la funcion sin parametro, con () de la misma forma */

// #otro ejemplo.2# sin corchetes {}
var nombre = ()/* no lleva parametro */ => "victor";/* directamente le asignamos un string con FLEHCAS */
// no hizo faltar abrir llaves

console.log(nombre());/* llamas a la funcion sin parametro, con () de la misma forma */

// EJEMPLO #3 FUNCIONES ANIDADAS

function operacion() {
    const PI = 3.14;
    function area(radio) {
        var area = PI * radio * radio;
        console.log('el area del circulo es: '+area)
    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);