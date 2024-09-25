import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { useForm } from 'react-hook-form'
import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useEffect } from 'react';

import { useLoadFonts } from "../../fonts";
const logo = require('../../../assets/img/Nagnamita.png')

export default function Entrar() {
  const navigation = useNavigation();
  const fontsLoaded = useLoadFonts();
  const { register, setValue, handleSubmit } = useForm()
  const email = "nanami@gmail.com";
  const senha = "123456";


  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const onSubmit = data => {
    // Verifica se as credenciais estão corretas
    if (data.email === email && data.password === senha) {
      // Navegar para a próxima página, se necessário
      console.log("Login bem-sucedido!");
      routeName = 'Home';
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName }],
        })
      );
    } else {
      console.log("Email ou senha incorretos.");
      // Exiba uma mensagem de erro, se desejar
    }
  };

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
      <View style={styles.image}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder={'Digite seu email'}
            onChangeText={text => setValue('email', text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            placeholder={'Digite sua senha'}
            onChangeText={text => setValue('password', text)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}><Text style={styles.buttonText}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B2B40"
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',

  },
  logo: {
    width: '60%',
    resizeMode: 'contain'
  },
  title: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Bodoni-Moda-SC",
    lineHeight: 30,
    paddingBottom: '5%',
    fontWeight: 'bold'
  },
  form: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 100,
    paddingTop: '20%',
    alignItems: 'center',
    gap: 30
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  input: {
    height: 40,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: "#10446c",
    height: "13%",
    width: "28%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
})