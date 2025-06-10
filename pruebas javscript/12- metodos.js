// METODOS, similar a funciones, pero aplicado a objetos y no necesariamente a arrays

// y si, anteriormente viste el uso de muchos mas metodos como: parseFloat, eval, date.parse (en funciones-11.js)
                                    // indexOf, unshift, pop, shift, sort, concat, lenght, splice (en arrays-6.js)
                                    
// y ahora veremos metodos de arrays, que son muy utiles y muy usados en javascript


/* recordatorio: => arrow function, son usadas en casi todas las funciones y metodos */
/* value: representa cada valor en el array */

/* GLOSARIO: 
    forEach: por cada elemento
    some: algun valor
    every: todos los valores
    map: mapeo, crear (duplicar) un nuevo array
    filter: filtrar, crear un nuevo array con los valores que cumplen la condicion
    reduce: reducir, sumar todos los valores y devolver un solo valor
*/

// forEach: #1


let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// some con arrow function (más moderno y conciso)
numero.forEach((value) => {/* llamamos numero y señalamos con arrow fuction => */
    /* foreach revisa elemento por elemento DEL ARRAY */
        console.log(value == 5);/* value es UN Boleano, devolvera true o false */
});

// forEach con función tradicional
numero.forEach(function(i){
    console.log(i);
});

// 2. Bucle for tradicional
// Es más versátil pero más verbose (requiere más código)
for (i = 0; i < numero.length; i++) {
    console.log(numero[i]);
}


// some: #2


    let numeros = [1, 2, 3, 4, 5];/* con let la variable no cambia, los valores si. Var no */

console.log(numeros.some((value)    => {/* some revisa ALGUNA coincidencia que cumpla */
    return value % 2 ==  0;/* devuelve true si encuentra un elemento que dividido por 2 de 0 */
}));


console.log(numeros.some((value)=>{/* some revisa ALGUNA coincidencia que cumpla */
    return (value < 0);/* devuelve true si encuentra un numero menor a 0 (false) */
}));


// every: #3


let numeros2 = [1, 2, 3, 4, 5];

console.log(numeros2.every((value) => {/* every revisa si TODOS los elementos cumplen la condicion */
    return(value == 5);/* devuelve true si todos los elementos son iguales a 5 (false) */
}));

// map: #4

let numeros3 = [1, 2, 3, 4, 5, 6];

let duplicar = numeros3.map(value => {/* map crea un nuevo array con los valores que le pasamos */
    return value * 2;/* return es clave, sino devuelve undefined. */
});

console.log(duplicar);/* devuelve un nuevo array con los valores duplicados */

// filter: #5

let numeros4 = [1020, 3340,7046, 2550, 1092]; 

let numeros_grandes = numeros.filter((value) => { 
return (value > 2500); 
}); 
console.log(numeros_grandes);/* devuelve un nuevo array con los valores mayores a 2500 */ 

// reduce: #6

let numeros5 = [1, 2, 3, 4, 5];

let respuesta = numeros5.reduce((sumar, dato_act) =>/* reduce es un metodo que reduce el array a un solo valor */
    sumar + dato_act, 0);/* reduce suma todos los elementos del array y devuelve un solo valor */

console.log(respuesta);/* devuelve la suma de todos los elementos del array */

