import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function NotificationComponent({e,eu,ep}) {
  return (
    <View style={styles.container}>
        {e? 
          (<View style={styles.notification}>
            <AntDesign name="frown" size={24} color="black" />
            <Text style={styles.text}>{e}</Text>
          </View>) : null}
        {eu? 
          (<View style={styles.notification}>
            <AntDesign name="frown" size={24} color="black" />
            <Text style={styles.text}>{eu}</Text>
          </View>) : null}
          {ep? 
          (<View style={styles.notification}>
            <AntDesign name="frown" size={24} color="black" />
            <Text style={styles.text}>{ep}</Text>
          </View>) : null}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      alignItems: 'center',
    },
    notification: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
    },
    text: {
      color: '#fff',
      marginLeft: 10,
    },
  });