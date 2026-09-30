// Parte 1

function saludar() {
console.log("Hola");
return "adiós";
}

const a = saludar;
const b = saludar();

console.log(typeof a, typeof b);

// Creo que typeof a es null, y luego typeof b es un string porque devuelve "adiós"
// primero se mostrara el null de a, luego el "Hola" de saludar() y luego lo que diga b


// Parte 2

// Funcion 1: Al ejecutarla da error porque alPulsar no esta definido
/*
function saludar() {
console.log("Hola");
return "adiós";
}

// Funcion 2: Al ejecutarla da otro error porque callback no es una funcion.

function alPulsar(callback) {
callback();
}

alPulsar(saludar);
alPulsar(saludar());
*/

// Parte 3

function alPulsar(callback) {
  callback();
}

function borrar(id) {
  console.log("Borrando la tarea", id);
}

alPulsar(() => borrar(3));