import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import GenderIndicator from './GenderIndicator';
import StatusIndicator from './StatusIndicator';
//const {height, width} = useWindowDimensions();
const {width} = Dimensions.get('screen');
export default function CharacterCard(props) {
    const { character } = props;
    //console.log(character.character);
    console.log("characterok")
    
    //console.log(height,"-", width);
  return (
    <Pressable >
        <View style={styles.card}>
          <Image source={{uri: character.character.image}} style={styles.icon} />
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.mainText}>
                {character.character.name}
              </Text>
              <View style={styles.infoRow}>
                <Text
                  numberOfLines={1}
                  style={[styles.subText, {textTransform: 'uppercase'}]}>
                  {character.character.species}
                </Text>
                <Text numberOfLines={1} style={styles.subText}>
                  {character.type}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <StatusIndicator status={character.character.status} />
                <GenderIndicator gender={character.character.gender} />
              </View>
            </View>
            <View style={styles.viewContainer}>
              <Text style={styles.viewText}>→</Text>
            </View>
          </View>
        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: width / 3.2,
        borderRadius: 14,
        backgroundColor: '#d9ed92',
        marginVertical: 7,
        overflow: 'hidden',
        padding: 5,
      },
      icon: {
        height: '100%',
        width: width / 3.2 - 10,
        borderRadius: 50,
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
        color: '#2C3333',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      subText: {
        color: '#5E6666',
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 5,
      },
      viewContainer: {justifyContent: 'center', marginHorizontal: 5},
      viewText: {color: '#2C3333', fontSize: 22, fontWeight: 'bold'},
    })