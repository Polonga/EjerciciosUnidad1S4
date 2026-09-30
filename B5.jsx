import { Button, TextInput, View } from "react-native";


export default function App() {

    return (
    <View>
        <TextInput placeholder="Nombre"></TextInput>
        <TextInput placeholder="Ciudad"></TextInput>
        <Button title="Saludar" onPress={saludar}></Button>
    </View>
    );

    function saludar() {
        
    }
}