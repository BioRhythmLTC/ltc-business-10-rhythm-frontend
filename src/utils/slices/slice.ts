import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IResponse } from "../../types/types";
interface IState {
  entities: IResponse[];
  searchString: string;
}
const initialState: IState = {
  entities: [],
  searchString: "",
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setResponseData: (state, action: PayloadAction<IResponse[]>) => {
      state.entities = action.payload;
    },
    getSearchString: (state, action: PayloadAction<string>) => {
      const searchText = action.payload;
      // const textArray = searchText.split(" ").join();
      // state.searchString = textArray;
      state.searchString = searchText
    },

  },
});

export const { setResponseData, getSearchString } = dataSlice.actions;
export default dataSlice.reducer;
