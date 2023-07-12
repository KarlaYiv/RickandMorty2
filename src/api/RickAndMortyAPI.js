import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API_URL} from '@env'

export const fetchData = async (page) => {
  try {
    const response = await axios.get(API_URL + `/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchFavorites = async (favoritos) => {
  try {
    const URL_FAVORITOS=API_URL + '/'+favoritos
    //console.log(URL_FAVORITOS);
    const response = await axios.get(URL_FAVORITOS);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};