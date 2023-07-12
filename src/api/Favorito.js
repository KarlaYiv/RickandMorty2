import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes, pull} from "lodash";
import { FAVORITE_STORAGE } from "../utils/Constants";

export const getFavoriteApi = async () => {
    try{
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        //console.log(JSON.parse(response || []));
        return JSON.parse(response || []);
    }catch(e){
        console.log(e);
    }
}

export const addFavoriteApi = async (id) => {
    try{
        let favorites = await getFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }catch(e){
        console.log(e);
    }
}

export const rmvFavoriteApi = async (id) => {
    try {
        let favorites = await getFavoriteApi();
      if (favorites !== null) {
        //let favorites = JSON.parse(favorites);
        favorites = favorites.filter(favoriteId => favoriteId !== id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error(error);
    }
}

export const isFavoriteApi = async (id) => { 
    try{
        const favorites = await getFavoriteApi();
        return includes(favorites, id);
    }catch(e){
        console.log(e);
        return false;
    }
}   

export const totalFavoritos = async () => {
    try{
        const favorites = await getFavoriteApi();
        console.log("totalFavoritos "+favorites.length);
        return favorites.length;
    }catch(e){
        console.log(e);
        return 0;
    }
}