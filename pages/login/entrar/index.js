import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { useLoadFonts } from "../../fonts";


export default function Entrar() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }
  return (
    <View>
      <StatusBar />
      <Text>Entrar</Text>
    </View>
  )
}
