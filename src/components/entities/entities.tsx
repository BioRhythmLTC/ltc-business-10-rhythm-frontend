import { useSelector } from "react-redux";
import type { RootState } from "../../utils/store/store";
import "./entities.css";
import { useSearchSubstrings } from "../../utils/hooks/useSearchSubstrings";

export const Entities = () => {
  const entitiesArray = useSelector(
    (state: RootState) => state.dataSlice.entities
  );
  const errorText = useSelector(
    (state: RootState) => state.dataSlice.errorText
  );

  const { handleGetSubstring } = useSearchSubstrings();

  return errorText !== null ? (
    <p className="error">Error: {errorText}</p>
  ) : (
    <main className="entities">
      {entitiesArray.map((item, index) => (
        <div key={index} className="entities__item">
          <div className="entities__item_common entities__item_entity">
            {item.entity}
          </div>
          <div className="entities__item_common entities__item_substring">
            {handleGetSubstring(item)}
          </div>
        </div>
      ))}
    </main>
  );
};
