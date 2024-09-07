import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./LanguageSlice";
import EmploySlice from "./EmploySlice";
import CoursesSlice from "./CousesSlice";
import projectSlice from "./ProjectSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    employes: EmploySlice,
    courses: CoursesSlice,
    projects: projectSlice,
  },
});
