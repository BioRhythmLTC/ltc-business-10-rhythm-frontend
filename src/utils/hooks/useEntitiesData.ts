import { useDispatch } from "react-redux";
import { getSearchTypes } from "../api/api";
import {
  getSearchString,
  getValuesArray,
  setError,
  setResponseData,
} from "../slices/slice";

export const useEntitiesData = () => {
  const dispatch = useDispatch();

  const handleGetData = async (searchValue: string) => {
    const { data, error } = await getSearchTypes({ text: searchValue });
    if (!data) return;
    if (error) {
      dispatch(setError(error));
    } else {
      dispatch(setError(null));
    }

    dispatch(setResponseData(data));
    dispatch(getSearchString(searchValue));
    dispatch(getValuesArray(data));
  };

  return { handleGetData };
};
