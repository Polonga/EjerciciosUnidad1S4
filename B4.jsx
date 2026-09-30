import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {

    const [texto, setTexto] = useState("");

    return (
        <View >
            <TextInput placeholder="Escribe algo..." value={texto} onChangeText={setTexto} />
            <Text>Estás escribiendo: {texto}</Text>
            <Text>Caracteres {texto.length} </Text>
            <Button title="Borrar" onPress={borrar} />
        </View>
    );

    function borrar() {
        setTexto("");
    }

}
