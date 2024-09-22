"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialState = {
  data: [],
  isLoading: false,
  isError: false,
};
export const AllApiHandler: any = createAsyncThunk(
  "AllApiHandler",
  async () => {
    try {
      const reqProjects = await axios.get("/pages/api/project_upload");
      const projects = reqProjects?.data?.reqApi;

      const loggedUserApi = await axios.get("/pages/api/token");
      const loggedUser = loggedUserApi?.data?.findUser;

      return { projects, loggedUser };
    } catch (error: any) {
      return null;
    }
  }
);

export const Slice = createSlice({
  name: "Slice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      AllApiHandler.pending,
      (state: any, action: PayloadAction<any>) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      AllApiHandler.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      AllApiHandler.rejected,
      (state: any, action: PayloadAction<any>) => {
        state.isError = true;
      }
    );
  },
});

export const {} = Slice.actions;
export default Slice.reducer;
