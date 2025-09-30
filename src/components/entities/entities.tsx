import { useSelector } from "react-redux";
import type { RootState } from "../../utils/store/store";
import type { IResponse } from "../../types/types";
import "./entities.css";

export const Entities = () => {
  const entitiesArray = useSelector(
    (state: RootState) => state.dataSlice.entities
  );
  const searchString = useSelector(
    (state: RootState) => state.dataSlice.searchString
  );
  console.log("searchString", searchString);
  console.log("entitiesArray", entitiesArray);
  const handleGetSubstring = (item: IResponse) => {
    return searchString.slice(item.start_index, item.end_index);
  };
  return (
    <main className="entities">
      {/* <div className="entities__box"> */}
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
      {/* </div> */}
    </main>
  );
};
