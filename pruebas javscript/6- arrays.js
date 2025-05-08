// ARRAYS
// EJEMPLOS 1
var numeros = [1,2,3,4,5];/* de esta forma creas un array con numeros */
var estudiantes = ["carlos","maria","jose"];/* de esta forma creas un array con string */

console.log(numeros);

console.log(estudiantes [2]);/* se selecciono la posicion del array, 0 siendo el 1er valor
 */

console.log(estudiantes.sort());/* lo ordena alfabeticamente
 */
// podrias usar el parametro .lenght para contar

console.log(estudiantes.shift());/* elimina el 1er valor
 */

console.log(estudiantes.pop());/* elimina el ultimo valor
 */

// por eso al verificar la consola, solo muestra JOSE


// EJEMPLOS 2
var estudiantes2 = ["david","beto","ana"];/* de esta forma creas un array con string */

console.log(estudiantes2.indexOf("beto"));/* indexOf para verificar la posicion de un array */
console.log(estudiantes2)/* seguido de otro console.log para mostrar */

console.log(estudiantes2.indexOf("sara"));/* al ingresar sara, el valor no existe y devuelve -1 */
console.log(estudiantes2.unshift("sara"));/* de esta forma agregamos el valor a los arrays */
console.log(estudiantes2)/* seguido de otro console.log para mostrar */

// EJEMPLOS 3

var grupo_a = [1,2,3];
var grupo_b = [4,5,6];

console.log(grupo_a.concat(grupo_b));/* recuerda que cont significa concatenar = unir
osea que unira los 2 grupos */