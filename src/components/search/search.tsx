import { useState } from "react";
import "./search.css";
import { getSearchTypes } from "../../utils/api/api";
import { useDispatch } from "react-redux";
import { getSearchString, setResponseData } from "../../utils/slices/slice";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const handleGetData = async () => {
    const data = await getSearchTypes({ text: searchValue });
    console.log("in conponent", data);
    dispatch(setResponseData(data));
    dispatch(getSearchString(searchValue));
  };

  return (
    <section className="search">
      <div className="search__button search__div">
        <img className="search__icon" src="./search.svg" alt="search" />
      </div>

      <input
        className="search__input"
        type="text"
        placeholder="поиск по товарам"
        value={searchValue}
        onChange={(e) => {
          if (e.target.value.length === 0 || /^[^\s].*/.test(e.target.value)) {
            setSearchValue(e.target.value);
          }
        }}
      />
      <button
        className="search__button"
        type="submit"
        onClick={() => handleGetData()}
      >
        <img className="search__button_icon" src="/arrow.svg" alt="search" />
      </button>
    </section>
  );
};
