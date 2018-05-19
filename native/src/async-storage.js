import { AsyncStorage } from 'react-native'

export const getItem = async (key, value) =>
  JSON.parse(await AsyncStorage.getItem(key))

export const setItem = (key, value) =>
  AsyncStorage.setItem(key, JSON.stringify(value))
