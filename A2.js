// Bloque 1

// Antes: Creo que devuelve la longitud 3 porque origial y === devuelve True porque la original y la copia son iguales.

const original = ["a", "b"];
const copia = original;
copia.push("c");
console.log(original.length, original === copia);


// Bloque 2

// Antes: Creo que la longitud del original da 2, y la nueva da 3, y los === da false porque esta vez no son iguales y si hay 2 array.

const originall = ["a", "b"];
const nueva = [...originall, "c"];
console.log(originall.length, nueva.length, originall === nueva);


// Respuesta: La difernecia entre "copia = original" y "[...original, "c"]" es que en el primer caso
// crea una copia exacta, y en la sigueinte copia la array y añade un elemento nuevo sin cambiar la original.