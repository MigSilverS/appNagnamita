import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useLoadFonts } from "../fonts";

const background = require("../../assets/img/loginbackground.jpeg");

export default function Login() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.top}>
          <View style={styles.midText}>
            <Text style={styles.title}>Adquira a elegância necessária</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Criar uma Conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  midText: {
    marginTop: "35%",
    marginHorizontal: "10%",
  },
  top: {
    flex: 2
  },
  title: {
    color: "white",
    fontSize: 50,
    textAlign: "left",
    fontFamily: "Bodoni-Moda-SC",
    lineHeight: 50,
  },
  buttons: {
    backgroundColor: "#112e42",
    flex: 0.45,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button1: {
    backgroundColor: "#cabcba",
    height: "25%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "#10446c",
    height: "15%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText1: {
    fontFamily: "Bodoni-Moda-SC-Bold",
    fontSize: 30,
  },
  buttonText2: {
    color: "white",
    fontFamily: "Bodoni-Moda-SC-Bold",
    fontSize: 18,
  },
});
