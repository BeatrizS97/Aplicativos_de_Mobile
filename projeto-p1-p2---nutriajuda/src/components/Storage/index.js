import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    if (typeof value === 'object') {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.setItem(key, value.toString());
    }
  } catch (error) {
    console.error(`Erro ao salvar ${key}:`, error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return null;
  } catch (error) {
    console.error(`Erro ao recuperar ${key}:`, error);
    return null;
  }
};