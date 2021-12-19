import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToAsyncStorage = async (key, data) => {
    await AsyncStorage.setItem(key, data);
}

export const getFromAsyncStorage = async (key) => {
    return await AsyncStorage.getItem(key);
}

export const removeFromAsyncStorage = async (key) => {
    await AsyncStorage.removeItem(key);
}