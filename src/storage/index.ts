import AsyncStorage from "@react-native-async-storage/async-storage";

export async function SetStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (_) {}
}

export async function GetStorage(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (_) {}
  return null;
}
