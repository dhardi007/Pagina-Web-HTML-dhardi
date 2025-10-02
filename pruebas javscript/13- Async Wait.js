// Promises y Async/Await en JavaScript

// Creamos una función que devuelve una promesa

function esperarUnSegundo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("¡Pasó 3 segundo!");
    }, 3000);
  });
}

// Usamos async/await para esperar la promesa
async function ejecutar() {
  const mensaje = await esperarUnSegundo(); // Esperamos a que se resuelva
  console.log(mensaje); // Salida después de 1 segundo: ¡Pasó 1 segundo!
}

ejecutar();
