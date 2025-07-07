/* codigos extraido de advent.js de Midulive.. */

// #5 {Fácil}  Completado ✓ - Contando los días para los regalos
function daysToXmas2(date) {


  const christmas = new Date('Dec 25, 2021');
 
  // Obtenemos la diferencia en milisegundos
  
 const diffTime = christmas.getTime() - date.getTime();
//  toda fecha date empieza a contar desde el 1 de enero de 1970
// date no representa ninguna fecha en particular

                // EXPLICACION MAS VISUAL:
//      ←---1970---[date]-----------[christmas-RECTA FINAL]---→
    // diffTime = distancia en milisegundos entre ambos puntos



  // Convertimos a días (1 día = 1000 * 60 * 60 * 24 ms)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;/* DiffDay devolvera 1 dia lo cual no es logico, pero funciona.*/
}

console.log("[Advents.js ORIGINAL]Ejemplo disfuncional solo devuelve el dia y no tiene recursivdad", daysToXmas2(new Date()));

// ←--- EN RESUMEN: ---→
// La idea de calcular días con Date y getTime() es totalmente válida y útil.

// Pero la forma en que el código fue presentado (llamar la función date dentro de sí 
// misma sin retorno (recursividad) ni control no es práctica ni correcta
// y no tiene el dia base definido antes de llamar a la función.

/* 
Uncaught RangeError: Maximum call stack size exceeded
uBOL: Generic cosmetic filtering stopped because no more DOM changes
{RECURSIVIDAD INFINITA}
significa que hay una recursión infinita, es decir, la función daysToXmas2 se está llamando a sí misma una y otra vez sin detenerse.
{RECURSIVIDAD INFINITA}
 */


// file: dayToXmas.js
/* importar la mima funcion mas robusta para definir el dia.. */
import daysToXmas from './dayToXmas.js'

console.log("\n→ [LO MISMO IMPORTADO]\n Ejemplo con fecha definida como base:");
// \n es un salto de línea para separar los ejemplos
const base = new Date('Dec 1, 2021');
console.log("[IMPORTADO]Día base:", base.toDateString());
console.log("[IMPORTADO]Faltan:", daysToXmas(base), "días para Navidad.");

// #01 {Fácil} Completado ✓ - Contando ovejas para dormir

// #02 {Fácil} Completado ✓ - ¡Ayuda al elfo a listar los regalos!

// #13 {Fácil} Completado ✓ - Envuelve regalos con asteriscos

// #16 {Fácil} Completado ✓ - Descifrando los números...

// #18 {Fácil} Completado ✓ - El sistema operativo de Santa Claus

// #20 {Fácil} Completado ✓ - ¿Una carta de pangramas? ¡QUÉ!
