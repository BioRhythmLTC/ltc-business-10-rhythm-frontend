import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IResponse } from "../../types/types";
interface IState {
  entities: IResponse[];
  searchString: string;
  unitedEntities: IResponse[];
  errorText: string | null;
}
const initialState: IState = {
  entities: [],
  searchString: "",
  unitedEntities: [],
  errorText: null,
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
      state.searchString = searchText;
    },
    getValuesArray: (state, action: PayloadAction<IResponse[]>) => {
      const allEntities = action.payload;
      const result: IResponse[] = [];
      let currentEntity: IResponse | null = null;

      for (const el of allEntities) {
        const entityType = el.entity.replace(/^B-/, "").replace(/^I-/, "");

        if (!currentEntity) {
          currentEntity = {
            start_index: el.start_index,
            end_index: el.end_index,
            entity: entityType,
          };
        } else {
          if (currentEntity.entity === entityType) {
            currentEntity.end_index = el.end_index;
          } else {
            result.push(currentEntity);
            currentEntity = {
              start_index: el.start_index,
              end_index: el.end_index,
              entity: entityType,
            };
          }
        }
      }
      if (currentEntity) result.push(currentEntity);
      state.unitedEntities = result;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.errorText = action.payload;
    },
  },
});

export const { setResponseData, getSearchString, getValuesArray, setError } =
  dataSlice.actions;
export default dataSlice.reducer;
