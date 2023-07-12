import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { selectGenderSymbol } from '../../utils/Style';

export default function GenderIndicator(props) {
    const { gender } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.indicator}>{`${selectGenderSymbol(gender)} `}</Text>
        {gender}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          text: {
            color: 'white',
            fontSize: 16,
            marginVertical: 5,
          },
          indicator: {
            fontSize: 20,
          },
    }
  )

  