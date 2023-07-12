import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UserProperties({fname, lname, email}) {
  return (
    <View>
      <View style={styles.infoView}><Text style={styles.infoText}>Nombre: </Text><Text style={styles.infoCharacter}>{fname}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Apellido: </Text><Text style={styles.infoCharacter}>{lname}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Email: </Text><Text style={styles.infoCharacter}>{email}</Text></View>
    </View>
  )
}
const styles=StyleSheet.create({
    infoContainer:{
      alignContent:'center',
    },
    propTitle:{
      fontSize:20,
      color:'gray',
      textAlign:'center'
    },
    infoView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:35,
      marginBottom:5
    },
    infoText:{
      borderColor:'#1F8A70',
      borderWidth:1,
      fontWeight:'bold',
      fontSize:18,
      color: 'white',
      backgroundColor:"#FFA41B",
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:100,
      marginRight:10,
    },
    infoCharacter:{
      borderColor:'##1F8A70',
      borderWidth:1,
      fontSize:16,
      color: 'white',
      backgroundColor:"#FFA41B",
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:240,
    }
  })