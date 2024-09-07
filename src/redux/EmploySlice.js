import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiFetch from "../api/ApiFetch";

export const fetchAllEmployees = createAsyncThunk(
  "employes/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiFetch({ url: "employee/find/all" });
      return response; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const EmploySlice = createSlice({
  name: "employes",
  initialState: {
    gettingAllEmployees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.gettingAllEmployees = action.payload;
      })
      .addCase(fetchAllEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default EmploySlice.reducer;
