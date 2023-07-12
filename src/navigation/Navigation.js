import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import NavigationAccount from './NavigationAccount';
import NavigationFavoritos from './NavigationFavoritos';
import NavigationRickAndMorty from './NavigationRickAndMorty';
import useAuth from '../hooks/UseAuth';

export default function Navigation() {
    const {auth} = useAuth()
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Rickandmorty">
        <Tab.Screen 
            name='Account' 
            component={NavigationAccount}
            options={{
                tabBarLabel:"Mi cuenta",
                tabBarIcon:({color,size})=>{
                    <Icon name='users' color={color} size={size} solid/>
                }
            }}
        />
        <Tab.Screen 
            name='Rickandmorty' 
            component={NavigationRickAndMorty}
            options={{
                tabBarLabel:"",
                tabBarIcon: () => renderIconRM()
            }}
        />
        <Tab.Screen 
            name='Favoritos' 
            component={NavigationFavoritos}
        />
    </Tab.Navigator>
  )
}

const renderIconRM=()=>{
    return(
        <Image
            source={require('../assets/iconoram.png')}
            style={{width:75, height:75, top:-20}}
        />
    )
}