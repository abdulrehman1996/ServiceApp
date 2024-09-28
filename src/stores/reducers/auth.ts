import {createSelector, createSlice} from '@reduxjs/toolkit';
import Defaultlanguage from '@/assets/languages/en.json';
import {themeLight} from '@/config/themes';
const initialState = {
  isLoading: false,
  role: 'customer',
  user: {},
  language: Defaultlanguage,
  theme: themeLight,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state: any, action: any) => {
      state.user = action.payload;
    },
    setUserRole: (state: any, action: any) => {
      state.role = action.payload;
    },
    changeLanguage: (state: any, action: any) => {
      state.language = action.payload;
    },
    changeTheme: (state: any, action: any) => {
      state.theme = action.payload;
    },
  },
});

export const {setUserInfo, setUserRole, changeLanguage, changeTheme} =
  auth.actions;
export default auth.reducer;
