import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button } from 'react-native-paper'

export default function OnlyLogin() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Esta pantalla solo se ve cuando no hay una sesión</Text>
        <Text style={styles.text}>Inicia sesión para ver esta pantalla</Text>
        <Button onPress={() => navigation.navigate('Account')} style={styles.button}>Iniciar Sesion</Button>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFA41B',
      padding: 16,
    },
    text: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#16FF00',
      color: '#fff',
      padding: 10,
      borderRadius: 5,
    },
  });