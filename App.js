import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useLoadFonts } from "./pages/fonts";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Entrar from "./pages/login/entrar";
import Cadastrar from "./pages/login/cadastrar";
import Home from "./pages/home";
import { Video, ResizeMode } from "expo-av";
import { useEffect, useState } from "react";

const background = require("./assets/img/loginbackground.jpeg");

function Login() {
  const fontsLoaded = useLoadFonts();
  const navigation = useNavigation();

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
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Entrar')}>
            <Text style={styles.buttonText1}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Cadastrar')}>
            <Text style={styles.buttonText2}>Criar uma Conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    // <Home/>
  );
}

function Splash({ onFinish }) {
  return (
    <Video
      style={[StyleSheet.absoluteFill, { backgroundColor: "#102736" }]}
      resizeMode={ResizeMode.CONTAIN}
      source={require('./assets/img/Nagnamita.mp4')}
      isLooping={false}
      shouldPlay={true}
      onPlaybackStatusUpdate={status => {
        if (status.didJustFinish) {
          onFinish();  // Chama a função quando o vídeo termina
        }
      }}
    />
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isSplashVisible, setSplashVisible] = useState(true);

  // Efeito para esconder a tela de splash após 3 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSplashVisible ? (
          <Stack.Screen
            name="Splash"
            options={{ headerShown: false }}
          >
            {() => <Splash onFinish={() => setSplashVisible(false)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Entrar" component={Entrar}
              options={{
                title: '', headerShown: false
              }}
            />
            <Stack.Screen name="Cadastrar" component={Cadastrar}
              options={{
                title: '', headerShown: false
              }}
            />
            <Stack.Screen name="Home" component={Home}
              options={{
                title: '', headerShown: false
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
    flex: 2,
  },
  title: {
    color: "white",
    fontSize: 50,
    textAlign: "left",
    fontFamily: "Bodoni-Moda-SC",
    lineHeight: 50,
  },
  buttons: {
    flex: 0.55,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button1: {
    backgroundColor: "#cabcba",
    height: "30%",
    width: "40%",
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "#10446c",
    height: "20%",
    width: "45%",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText1: {
    textAlign: "center",
    margin: 'auto',
    fontFamily: "Bodoni-Moda-SC-Bold",
    fontSize: 30,
  },
  buttonText2: {
    textAlign: "center",
    color: "white",
    fontFamily: "Bodoni-Moda-SC-Bold",
    fontSize: 18,
  },
});
