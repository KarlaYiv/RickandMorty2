import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { addFavoriteApi, isFavoriteApi, rmvFavoriteApi } from '../../api/Favorito';
export default function FavHeart({ characterId }) {

  const [isFavorite, setFavorite]= useState(null)
  
  const addFavorite = async () => {
   if(isFavorite){
    await rmvFavoriteApi(characterId)
    setFavorite(false);
  }else{
    await addFavoriteApi(characterId)
    setFavorite(true);
  }
  }

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(characterId);
      if (response) setFavorite(true);
        else{
          setFavorite(false);
        }
    })()
  },[])


  return (
    <TouchableOpacity onPress={addFavorite}>
    <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={30} color="white" />
    </TouchableOpacity>
  )
}