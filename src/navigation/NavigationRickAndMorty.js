import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RickAndMortyList from '../components/RickAndMortyList';
import RickAndMortyDetail from '../screen/RickAndMortyDetail';

export default function NavigationRickAndMorty() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
          <Stack.Screen name='RickAndMortyList' component={RickAndMortyList}
          options={{title:'', headerTransparent:true}}/>
          <Stack.Screen name='RickAndMortyDetail' component={RickAndMortyDetail}/>
      </Stack.Navigator>
    )
}