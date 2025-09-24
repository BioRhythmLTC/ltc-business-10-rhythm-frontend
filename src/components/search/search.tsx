import { useState } from "react";
import "./search.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="search" >
        <div className="search__button search__div" >
          <img className="search__icon" src="./search.svg" alt="search" />  
        </div>
      
      <input
        className="search__input"
        type="text"
        placeholder="поиск по товарам"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="search__button" type="submit" onClick={() => console.log(searchValue)}>
        <img className="search__button_icon" src="/arrow.svg" alt="search" />
      </button>
    </section>
  );
};
