import { createSlice } from "@reduxjs/toolkit";

const getStoredInfo = (userId) =>
  (userId &&
    localStorage.getItem(userId) &&
    JSON.parse(localStorage.getItem(userId))) || { favorite: [], history: [] };

const storeInfo = (userId, info) =>
  localStorage.setItem(userId, JSON.stringify(info));

const storedUser =
  localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
const storedInfo = getStoredInfo(storedUser?.id);

const initialState = {
  email: storedUser?.email,
  token: storedUser?.token,
  id: storedUser?.id,
  info: storedInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.info = getStoredInfo(state.id);

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: state.email,
          id: state.uid,
          token: state.accessToken,
        })
      );
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;

      localStorage.setItem("user", null);
    },
    addFavorite(state, action) {
      const findItem = state.info.favorite.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.info.favorite.push({
          ...action.payload,
          count: 1,
        });
      }

      storeInfo(state.id, state.info);
    },
    removeFavorite(state, action) {
      state.info.favorite = state.info.favorite.filter(
        (obj) => obj.id !== action.payload
      );
      storeInfo(state.id, state.info);
    },
    addHistory(state, action) {
      state.info.history.push(action.payload);
      storeInfo(state.id, state.info);
    },
  },
});

export const { setUser, removeUser, addFavorite, removeFavorite, addHistory } =
  userSlice.actions;

export default userSlice.reducer;
