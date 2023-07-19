import Select from "react-select";
import {
  setCurrentNameValue,
  setCurrentSpeciesValue,
  setCurrentStatusValue,
} from "../store/slices/paginationSlice";
import { useDispatch, useSelector } from "react-redux";

import "./SearchBlock.css";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { addHistory } from "../store/slices/userSlice";

const options = [
  { value: "", label: "" },
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
  { value: "unknown", label: "unknown" },
];

function SearchBlock() {
  const currentName = useSelector((state) => state.pagination.currentName);
  const currentSpecies = useSelector(
    (state) => state.pagination.currentSpecies
  );
  const currentStatus = useSelector((state) => state.pagination.currentStatus);
  const [inputState, setInputState] = useState({
    name: currentName,
    species: currentSpecies,
    status: currentStatus,
  });

  const dispatch = useDispatch();

  const updateNameValue = useCallback(
    debounce((str) => {
      dispatch(setCurrentNameValue(str));
    }),
    []
  );

  const onChangeName = (event) => {
    setInputState({ ...inputState, name: event.target.value });
  };

  const updateSpeciesValue = useCallback(
    debounce((str) => {
      dispatch(setCurrentSpeciesValue(str));
    }),
    []
  );
  const onChangeSpecies = (event) => {
    setInputState({ ...inputState, species: event.target.value });
  };

  const getValue = () => {
    return inputState.status
      ? options.find((s) => s.value === inputState.status)
      : "";
  };

  const onUpdateChangeSort = useCallback(
    debounce((str) => {
      dispatch(setCurrentStatusValue(str));
    }),
    []
  );

  const onChangeStatus = (newValue) => {
    setInputState({ ...inputState, status: newValue.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateNameValue(inputState.name);
    updateSpeciesValue(inputState.species);
    onUpdateChangeSort(inputState.status);
    dispatch(addHistory({ ...inputState }));
  };

  return (
    <form className="search-block" onSubmit={onSubmit}>
      <div className="search-block__name">
        <p>Search by name</p>
        <input
          type="text"
          value={inputState.name}
          onChange={onChangeName}
          placeholder="Enter character name"
        />
      </div>
      <div className="search-block__species">
        <p>Search by species</p>
        <input
          type="text"
          value={inputState.species}
          onChange={onChangeSpecies}
          placeholder="Enter character race"
        />
      </div>
      <div className="search-block__status">
        <p>Search by status</p>
        <Select
          classNamePrefix="custom-select"
          onChange={onChangeStatus}
          value={getValue()}
          options={options}
          placeholder={"Choose character status"}
          isSearchable={false}
        />
      </div>
      <div className="search-block__search-button">
        <input type="submit" value="Search" />
      </div>
    </form>
  );
}

export default SearchBlock;
