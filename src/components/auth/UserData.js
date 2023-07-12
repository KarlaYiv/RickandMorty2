import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, View, Image, Button, SafeAreaView, Dimensions, ImageBackground, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Colors from '../../utils/Colors';
import useAuth from '../../hooks/UseAuth';
import LogoRM from '../../assets/LogoRM.jpg'
import ImageLogin from '../../assets/portal.gif'
import { totalFavoritos } from '../../api/Favorito';

const {width} = Dimensions.get('screen');

export default function UserData() {
    const {auth, logout} = useAuth()
    const [favoritos, setFavoritos] = useState(0);
    useFocusEffect(
      useCallback(()=>{
        const obtenerFavoritos= async () =>{
          const total=await totalFavoritos();
            setFavoritos(total )
        };
        obtenerFavoritos();
      })
    );
  return (
    
    <SafeAreaView style={styles.saview}>
      <ImageBackground source={ImageLogin} style={styles.fondoImagen}>
              <Image source={LogoRM} style={styles.logoimagen}/>
          </ImageBackground>
      <View style={styles.container}>

            <Image 
                style={styles.profileImage} 
                source={require('../../assets/gato.jpg')}
            />
            <Title style={styles.userName}>{auth.userName}</Title>

            <Card style={styles.card}>
                <Card.Content>
                    <Title>Acerca de</Title>
                    <Paragraph>Nombre: {auth.lastName}</Paragraph>
                    <Paragraph>Apellido: {auth.firstName}</Paragraph>
                    <Paragraph>Cumpleaños: {auth.birthday}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Contacto</Title>
                    <Paragraph>Email: {auth.email}</Paragraph>
                    <Paragraph>Telefono: {auth.cellphone}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Paragraph>Total de favoritos:{favoritos}</Paragraph>
                </Card.Content>
            </Card>

            <Button title="Logout" onPress={logout} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
},
logoimagen:{
  width:'100%',
  height:'100%',
  position: 'absolute',
  top: 0,
  left:0,
  right:16,
  bottom: 0,
},
profileImage: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginBottom: 10,
},
userName: {
    marginBottom: 20,
    backgroundColor: Colors.blanco
},
card: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFA41B'
},
  saview: {
    width:'100%',
    height: '100%',
    backgroundColor: '#000000',
  }
    })