import { useSelector } from "react-redux";
import type { IResponse } from "../../types/types";
import type { RootState } from "../store/store";

export const useSearchSubstrings = () => {
  const searchString = useSelector(
    (state: RootState) => state.dataSlice.searchString
  );

  const handleGetSubstring = (item: IResponse) => {
    return searchString.slice(item.start_index, item.end_index);
  };

  return { handleGetSubstring };
};
