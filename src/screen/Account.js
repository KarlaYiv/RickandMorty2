import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import UserData from '../components/auth/UserData';
import LoginForm from '../components/auth/LoginForm';
import useAuth from '../hooks/UseAuth';

export default function Account() {
  const {auth} = useAuth()
  return (
    <SafeAreaView style={{flex:1}}>
        {auth ? <UserData/> : <LoginForm/>}
    </SafeAreaView>
  )
}