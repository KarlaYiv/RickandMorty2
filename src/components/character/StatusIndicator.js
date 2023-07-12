import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { selectStatusColor } from '../../utils/Style';

export default function StatusIndicator(props) {
    const { status } = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          {
            backgroundColor: selectStatusColor(status),
          },
        ]}
      />
      <Text style={styles.text}>{status}</Text>
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
            height: 5,
            width: 5,
            borderRadius: 5,
            marginLeft: 10,
            marginRight: 5,
          },
    }
  )