import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native'
import React from 'react'


const {width} = Dimensions.get('screen');
export default function UserPicture() {
  return (
    <View>
      <Image
        source={require('../../assets/gato.jpg')}
        style={[styles.image]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: width / 2,
        width: width / 2,
        marginHorizontal: width / 4,
        marginTop: 10,
        marginBottom: -16,
        borderRadius: width / 2,
        borderWidth: 4,
        borderColor: '#476072',
      },
    })