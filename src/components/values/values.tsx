import { useSelector } from "react-redux";
import "./values.css";
import type { RootState } from "../../utils/store/store";
import { useSearchSubstrings } from "../../utils/hooks/useSearchSubstrings";

export const Values = () => {
  const unitedEntities = useSelector(
    (state: RootState) => state.dataSlice.unitedEntities
  );
  const { handleGetSubstring } = useSearchSubstrings();
  
  return (
    <section className="united">
      {unitedEntities.map((item, index) => (
        <div className="united__entity" key={index}>
          {handleGetSubstring(item)}
        </div>
      ))}
    </section>
  );
};
