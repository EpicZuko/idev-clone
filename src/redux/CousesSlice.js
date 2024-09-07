import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAll",
  async ({ language }, { rejectWithValue }) => {
    try {
      const response = await ApiFetch({
        url: `course/find/all?language=${language}`,
      });
      return { action: response, language };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const CoursesSlice = createSlice({
  name: "courses",
  initialState: {
    gettingAllCourses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.gettingAllCourses = action.payload.action;
        state.language = action.payload.language;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CoursesSlice.reducer;
