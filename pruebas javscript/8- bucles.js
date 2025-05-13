// BUCLES
// EJEMPLO 1 MENOR QUE

/* # PRUEBA 1 */
// for = permite
for (let i = 0; i < 5; i ++ ) {
    console.log(i);
// este bucle se ejectua hasta obtener 4 menor a 5
}

/* # PRUEBA 2 */
    // CODIGO EXPLICADO como el orto PASO POR PASO

/* condicionante */for /* abrimos con un parametro () */(let index = 0; /* finaliza y abre otra linea llamando a index */ index <= 5; /* let es un valor fijo, y buscamos que sea menor que 5 */ index++/* usamos un incremento / + y cerramos parametro */){
    console.log(index);
} /* y abrimos llaves para mostrar la consola, cerramos */

// al final, en esta 2da prueba use <= menor o igual que y al final si recibi 5

// EJEMPLO 2 WHILE

// while = durante el tiempo que / mientras

let y = 0;
while (y < 8) {
    console.log(y)
    /* ERROR: se empezara a ejecutar el bucle haciendo reload la pagina DURANTE un tiempo indefinido */
    y++;/* el contador */
}

// la solucion fue añadir un contador al final que sume 1(++) hasta llegar a 8;
// una vez termina el contador, deja de repetir el bucle

// do while = "haz durante", funciona al revés: primero ejecuta, luego verifica la condición
let e = 0;
do {
    /* e++ - esto está mal {error#A2B} */
    console.log(e); // imprime antes de incrementar
    e++; // contador
} while (e < 3);

// {error#A2B} Si el contador (e++) va al inicio del bloque, el resultado será 3 en vez de 2.
// Esto ocurre porque se incrementa antes de imprimir, y aunque 3 < 3 sea falso, el 3 ya fue impreso.
// Por eso el incremento debe ir después: imprime solo cuando estés seguro de que el valor sigue dentro del límite.
// Regla: "No muestres el valor si ya superó la condición"

// EJEMPLO 3 +2 HASTA 20

let u = 0;
do {
    console.log(u)
    u = u + 2;
} while (u < 20);