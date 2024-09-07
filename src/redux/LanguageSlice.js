import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("language") || "KG",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "KG" ? "RU" : "KG";
      localStorage.setItem("language", state.language);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", state.language);
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
