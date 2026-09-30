const tareas = [{id: "1", titulo: "Comprar pan"}];

function agregarTarea(lista, titulo) {

    const nuevaTarea = {id:(lista.length + 1),titulo: titulo};
    
    return [...lista, nuevaTarea];
}

const nuevas = agregarTarea(tareas, "Estudiar React Native");

console.log(tareas.length, nuevas.length);
console.log(nuevas[1]);