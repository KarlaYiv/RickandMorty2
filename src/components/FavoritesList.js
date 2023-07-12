import { StyleSheet, FlatList, Text, SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import RickAndMortyCard from './RickAndMortyCard';
import { getFavoriteApi } from '../api/Favorito';
import { fetchFavorites } from '../api/RickAndMortyAPI';

export default function FavoritesList() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    useFocusEffect(
      useCallback(()=>{
        const loadAndSetData = async () => {
          const favoritos = await getFavoriteApi();
          const resultSet = await fetchFavorites(favoritos)
          setCharacters(resultSet);
          setLoading(false);
          //console.log("characters")
          //console.log(characters)
        };
    
        loadAndSetData();
        console.log('recarga pantalla')
      })
    );
  
    if (loading) {
      return <Text>Loading...</Text>
    }
    return (
      <SafeAreaView style={styles.saview}>
        <FlatList 
          data={characters}
          keyExtractor={(item) => item.id}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <RickAndMortyCard characters={item} />}
          contentContainerStyle={StyleSheet.container}
          //onEndReachedThreshold={0.5}
          />
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        //paddingVertical: 20,
    },
    saview: {
      backgroundColor: '#CED0CE',
    }
  })