import { SafeAreaView, View, ActivityIndicator, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import RickAndMortyCard from './RickAndMortyCard';
import { fetchData } from '../api/RickAndMortyAPI';

export default function RickAndMortyList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    const resultSet = await fetchData(page); 
    setCharacters(prevCharacters => [...prevCharacters, ...resultSet.results]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  const renderHeader = () => (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}></Text>
    </View>
  );

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: "#CED0CE"}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.saview}>
      <FlatList 
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <RickAndMortyCard characters={item} />}
        contentContainerStyle={StyleSheet.container}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
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
      backgroundColor: '#FBF6F0',
    }
})