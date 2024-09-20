import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Criação do slice
const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuVisible: false,
    user: null,
  },
  reducers: {
    toggleMenu(state, action) {
      if (!state.user) {
        state.isMenuVisible = false;
        return;
      }
      const isVisible = action.payload;
      state.isMenuVisible = isVisible !== undefined ? isVisible : !state.isMenuVisible;
    },
    setUser: (state, action) => {
      const user = action.payload;
      if (user) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        state.user = user;
        state.isMenuVisible = true;
      } else {
        delete axios.defaults.headers.common['Authorization'];
        state.user = null;
        state.isMenuVisible = false;
      }
    },
  },
});

// Exportar as ações
export const { toggleMenu, setUser } = appSlice.actions;

// Criar o store
const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
