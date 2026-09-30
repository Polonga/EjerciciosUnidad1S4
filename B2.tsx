import { useState } from "react";
import { Button, Text, View } from "react-native";
let contador = 0;
export default function App() {
    
    const [contador, setContador] = useState(0);

    function sumar() {
        setContador(contador + 1);
        console.log("El contador ahora vale:", contador);
    }

    function restar() {
        setContador(contador - 1);
        console.log("El contador ahora vale:", contador);
    }
    
    function reiniciar() {
        setContador(0);
        console.log("El contador ahora vale:", contador);
    }

    return (
        <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{contador}</Text>
            <Button title="+1" onPress={sumar} />
            <Button title="-1" onPress={restar} />
            <Button title="Reiniciar" onPress={reiniciar} />
        </View>
    );

    // El codigo de error es [Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.]
    // Ocurre porque al ponerle los parentesis a la funcion sumar() se ejecuta inmediatamente, lo que provoca un bucle infinito de renderizados.
    // Para arreglarlo hay q ue quitarle los parentesis a la funcion sumar() y dejarlo como onPress={sumar}

}   