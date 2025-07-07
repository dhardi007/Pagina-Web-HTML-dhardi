// file: dayToXmas.js mas robusto que el de app.js


/* para exportar la funcion hay que tomar en cuenta:

- el index.js al linkear al archivo.js debe de tener el type="module"
- debes de tener un package.json con "type": "module" para que node.js lo interprete como un módulo ES6
- la función debe ser exportada con export default function daysToXmas() { ... }
- y luego podras importarla en otro archivo con import daysToXmas from './dayToXmas.js'; */

export default function daysToXmas(date = new Date()) {
  // 🎄 Función para calcular los días hasta Navidad 2021

  // Validación: debe ser una instancia de Date
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('El parámetro debe ser una fecha válida');
  }

  // 🎯 Fecha fija de referencia
  const christmas = new Date('Dec 25, 2021');

  // 📏 Diferencia en milisegundos desde 1970 entre ambas fechas
  const diffTime = christmas.getTime() - date.getTime();

  // 📅 Convertimos la diferencia a días (ceil: redondea hacia arriba)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

//
// ---------------------------------------------
// 🔍 EJEMPLOS / PRUEBAS
// ---------------------------------------------

console.log("→ [ROBUSTO Y EXPORTADO]\n Pruebas del enunciado:");
// \n es un salto de línea para separar los ejemplos
console.log(daysToXmas(new Date('Dec 1, 2021')));             // 24
console.log(daysToXmas(new Date('Dec 24, 2021 00:00:01')));   // 1
console.log(daysToXmas(new Date('Dec 25, 2021')));            // 0
console.log(daysToXmas(new Date('Jan 1, 2022 00:00:01')));    // -7

console.log("\n→ Ejemplo con la fecha actual:");
console.log(daysToXmas()); // Según el día de hoy

console.log("\n→ Ejemplo con fecha definida como base:");
const base = new Date('Dec 1, 2021');
console.log("Día base:", base.toDateString());
console.log("Faltan:", daysToXmas(base), "días para Navidad.");
