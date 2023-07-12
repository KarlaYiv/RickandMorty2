import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import RickAndMortyList from '../components/RickAndMortyList'
import CharacterCard from '../components/character/CharacterCard'
import CharacterDetail from '../components/CharacterDetail'

export default function RickAndMortyDetail(props) {
  const {navigation, route:{params}}=props
  return (
    <SafeAreaView style={{flex:1}}>
        <CharacterDetail character={params}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    card:{
      flexGrow:1,
      padding:16,
      height:130,
      padding:5
    },
    marginCard:{
      flex:1,
      padding:5,
      backgroundColor:'white',
      borderRadius:10,
      shadowColor: "#000",
      shadowOpacity:0.3,
      shadowRadius:4,
      elevation:5
    },
    colorCard:{
      flex:1,
      padding:5,
      borderRadius:10,
      backgroundColor:"#BE81F7"
    },
    name:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:14,
    },
    containerText:{
      width:90,
    },
    image:{
      position:"absolute",
      bottom:2,
      right:2,
      width:75,
      height:75,
      borderRadius:10
    },
    number:{
      position:"absolute",
      right:10,
      color:"#fff",
      fontSize:11
    }
  }
)