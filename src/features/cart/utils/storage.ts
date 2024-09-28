import AsyncStorage from "@react-native-async-storage/async-storage";
export const LOGGED_SESSION_KEY = "@userSession:key";
export const ROLE_USER_KEY = "@userRoleSession:key";
export const LOGGED_SESSION_DATA = "@userSession:data";

export const setLoggedInSessionToken = async (key: string) => {
  try {
    await AsyncStorage.setItem(LOGGED_SESSION_KEY, key);
  } catch (error) {}
};
export const getLoggedInSessionToken = async () => {
  try {
    let getsession = await AsyncStorage.getItem(LOGGED_SESSION_KEY);
    return getsession;
  } catch (error) {
    return error;
  }
};
export const setLoggedInSessionData = async (data: any) => {
  try {
    await AsyncStorage.setItem(LOGGED_SESSION_DATA, JSON.stringify(data));
  } catch (error) {}
};
export const getLoggedInSessionData = async () => {
  try {
    let getsession = await AsyncStorage.getItem(LOGGED_SESSION_DATA);
    return JSON.parse(getsession);
  } catch (error) {
    return error;
  }
};

export const setRoleUser = async (key: string) => {
  try {
    await AsyncStorage.setItem(ROLE_USER_KEY, key);
  } catch (error) {}
};

export const getRoleUser = async () => {
  try {
    let getsession = await AsyncStorage.getItem(ROLE_USER_KEY);
    return getsession;
  } catch (error) {
    return error;
  }
};

export const logoutClearSession = async () => {
  try {
    await AsyncStorage.removeItem(LOGGED_SESSION_KEY);
  } catch (ex) {
    // console.warn(ex.message)
  }
};
