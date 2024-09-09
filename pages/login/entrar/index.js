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
import React, { useEffect } from 'react';

import { useLoadFonts } from "../../fonts";
const logo = require('../../../assets/img/Nagnamita.png')

export default function Entrar() {
  const fontsLoaded = useLoadFonts();
  const { register, setValue, handleSubmit } = useForm()

  useEffect(() => {
    register('email')
    register('password')
  }, [register])
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
  form: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 100,
    paddingTop: '40%',
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
  }
})