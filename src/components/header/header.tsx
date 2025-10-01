import { Search } from "../search/search";
import { Values } from "../values/values";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Search />
      <Values />
    </header>
  );
};
