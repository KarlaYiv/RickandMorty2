import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import GenderIndicator from './character/GenderIndicator';
import StatusIndicator from './character/StatusIndicator';
const {width} = Dimensions.get('screen');

export default function RickAndMortyCard(props) {
    const { characters } = props;
    const navigation = useNavigation();
    const goToCharacter = () => {
        navigation.navigate('RickAndMortyDetail',{character:characters})
    }
  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card}>
          <Image source={{uri: characters.image}} style={styles.icon} />
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <View style={styles.infoRow}>
                <Text numberOfLines={1} style={styles.mainText}>
                {characters.name}
                </Text>
                <Text numberOfLines={1} style={styles.subText}>
                #{`${characters.id}`.padStart(3,0)}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text
                  numberOfLines={1}
                  style={[styles.subText, {textTransform: 'uppercase'}]}>
                  {characters.species}
                </Text>
                <Text numberOfLines={1} style={styles.subText}>
                  {characters.type}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <StatusIndicator status={characters.status} />
                <GenderIndicator gender={characters.gender} />
              </View>
            </View>
            
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: width / 3.2,
      borderRadius: 14,
      borderColor:'#1F8A70',
      borderWidth:1,
      backgroundColor: '#FFA41B',
      marginVertical: 7,
      overflow: 'hidden',
      padding: 5,
    },
    icon: {
      height: '100%',
      width: width / 3.2 - 10,
      borderRadius: 14,
    },
    infoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    info: {
      flex: 1,
      justifyContent: 'space-between',
      paddingRight: 10,
    },
    infoRow: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      overflow: 'hidden',
    },
    mainText: {
      color: 'white',
      fontSize: 20,
      marginHorizontal: 10,
      marginVertical: 5,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    subText: {
      color: 'white',
      fontSize: 16,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    viewContainer: {justifyContent: 'center', marginHorizontal: 5},
    viewText: {color: 'white', fontSize: 22, fontWeight: 'bold'},
  })