import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./HistoryPage.css";
import {
  setCurrentNameValue,
  setCurrentSpeciesValue,
  setCurrentStatusValue,
} from "../store/slices/paginationSlice";

function HistoryPage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onHistoryClick = (history) => {
    dispatch(setCurrentNameValue(history.name));
    dispatch(setCurrentStatusValue(history.status));
    dispatch(setCurrentSpeciesValue(history.species));
    navigation(
      `/?currentName=${history.name}&currentStatus=${history.status}&currentSpecies=${history.species}&currentPage=1`
    );
  };

  const historySearch = useSelector((state) => state.user.info.history);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>History:</h1>
      <div className="history-search">
        <div
          className="history-search-title"
          style={{ display: "flex", marginLeft: "560px", marginTop: "50px" }}
        >
          <span style={{ marginRight: "200px" }}>Name:</span>
          <span style={{ marginRight: "200px" }}>Species:</span>
          <span>Status:</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "560px",
            marginTop: "30px",
            width: "700px",
          }}
        >
          {historySearch.map((search) => (
            <div
              key={search.id}
              className="search-value"
              style={{ textDecoration: "none", color: "#000" }}
              onClick={() => onHistoryClick(search)}
            >
              <span style={{ marginRight: "200px" }}>{search.name}</span>
              <span style={{ marginRight: "200px" }}>{search.species}</span>
              <span>{search.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
