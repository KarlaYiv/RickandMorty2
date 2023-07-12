import { SafeAreaView } from 'react-native'
import React from 'react'
import useAuth from '../hooks/UseAuth'
import FavoritesList from '../components/FavoritesList'
import OnlyLogin from '../components/auth/OnlyLogin'

export default function Favoritos() {
  const {auth} = useAuth()
  return (
    <SafeAreaView>
      {auth ? <FavoritesList/> : <OnlyLogin/>}
    </SafeAreaView>
  )
}
