import { AsyncStorage } from "@/utils/packages";
export const LOGGED_SESSION_KEY = "@userSession:key";

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

export const logoutClearSession = async () => {
  try {
    await AsyncStorage.removeItem(LOGGED_SESSION_KEY);
  } catch (ex) {
    // console.warn(ex.message)
  }
};
