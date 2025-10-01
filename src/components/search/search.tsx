import { useState } from "react";
import "./search.css";
import { useEntitiesData } from "../../utils/hooks/useEntitiesData";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const { handleGetData } = useEntitiesData();

  return (
    <section className="search">
      <div className="search__button search__div">
        <img className="search__icon" src="./search.svg" alt="search" />
      </div>

      <input
        className="search__input"
        type="text"
        placeholder="поиск по товарам"
        spellCheck
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
        onClick={() => handleGetData(searchValue)}
        disabled={searchValue === ""}
      >
        <img className="search__button_icon" src="/arrow.svg" alt="search" />
      </button>
    </section>
  );
};
