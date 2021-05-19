import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageHelper {
  static NAME = 'NAME';
  static ACCESS_TOKEN = 'ACCESS_TOKEN';
  static ID = 'ID';

  static async createSession(name: string, accessToken: string, id: string) {
    await AsyncStorage.setItem(StorageHelper.NAME, name);
    await AsyncStorage.setItem(StorageHelper.ACCESS_TOKEN, accessToken);
    await AsyncStorage.setItem(StorageHelper.ID, id);
  }

  static async getToken() {
    return await AsyncStorage.getItem(StorageHelper.ACCESS_TOKEN);
  }

  static async updateToken(accessToken: string) {
    await AsyncStorage.setItem(StorageHelper.ACCESS_TOKEN, accessToken);
  }

  static async restoreSession() {
    let accessToken = await AsyncStorage.getItem(StorageHelper.ACCESS_TOKEN);
    let name = await AsyncStorage.getItem(StorageHelper.NAME);
    let id = await AsyncStorage.getItem(StorageHelper.ID);

    if (!name || !accessToken || !id) {
      throw new Error('Session not found');
    }
    return {name, accessToken, id};
  }
}
