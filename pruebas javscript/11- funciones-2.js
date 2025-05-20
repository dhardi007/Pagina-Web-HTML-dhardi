// MAS FUNCIONEs

/* area del circulo
 */

function area() {/* no lleva parametro, por lo el cliente asigna el valor */

    const PI = 3.14;
    var radio = document.getElementById('radio').value
    var resultado = PI * radio * radio;
    document.getElementById('resultado').value = 
    resultado;

}

/* eval */

var a = 10;  // Declara variable a con valor 10
var b = 20;  // Declara variable b con valor 20

// eval() evalúa el string como código JavaScript
var x = eval("a + b");  // x = 30 (evalúa "10 + 20")
var y = eval("3 + 4");  // y = 7 (evalúa la suma directamente) 
var z = eval("a + 8");  // z = 18 (evalúa "10 + 8")

var respt = a + z;      // respt = 28 (10 + 18)
console.log(respt);     // Imprime 28 en la consola

/* pasefloat */

var a = parseFloat("10");  // Convierte el string "10" a número
var b = parseFloat("20curso");  // Convierte el string "20" a número
var c = parseFloat("10curso");  // Convierte el string "10curso" a número

console.log(c);  // Imprime NaN (Not a Number) porque "curso" no es un número

/* date.parse() */
// 1 enero de 1970;

var dato = "1 january, 1970 1:30 PM";
var resultado = Date.parse(dato);
console.log();  // Imprime el timestamp correspondiente a la fecha
