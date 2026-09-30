import { useState } from "react";
import { Button, Text, View } from "react-native";
let contador = 0;
export default function App() {
    
    // 3
    const [contador, setContador] = useState(0);

    function sumar() {
        setContador(contador + 1);
        console.log("El contador ahora vale:", contador);
    }

    // 4
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
}