import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const fetchAllProject = createAsyncThunk(
  "project/fetchAllProject",
  async ({ language }, { rejectWithValue }) => {
    try {
      console.log(language, "projects");
      const response = await ApiFetch({
        url: `project/find/all?language=${language}`,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    gettingAllProject: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProject.fulfilled, (state, action) => {
        state.loading = false;
        state.gettingAllProject = action.payload;
      })
      .addCase(fetchAllProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
