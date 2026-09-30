// 1
const persona = ["Marta", 28, "Sevilla"];

const [nombre, edad, ciudad] = persona

console.log(nombre,"tiene",edad,"años y vive en",ciudad)

// 2
function sumaYProducto (a, b) {
return [a + b, a * b];
}

console.log(sumaYProducto(3,4))

// 3
const [x,y,z] = persona

console.log(x,"tiene",y,"años y vive en",z)

//Respuesta: Si, sigue funcionando, el valor lo deciden los datos que tenga dentro no el nombre.

// 4
const [a, b] = persona

console.log(a,"tiene",b,"años")