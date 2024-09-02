import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const background = require('../../assets/loginbackground.jpg');

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
                <View style={styles.midtext}>
                    <Text style={styles.text}>Adquira a elegância necessária</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: "100%",
        height: "100%"
    },
    midtext: {
        marginTop: "35%",
    },
    text: {
        color: "white",
        fontSize: 50,
        textAlign: "left"
    }
});
