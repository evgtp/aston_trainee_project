import { useEffect, useState } from "react";
import Cutaway from "./Cutaway";
import Skeleton from "./CutawaySkeleton";
import SearchBlock from "./SearchBlock";
import axios from "axios";

import qs from "qs";
import { setCurrentPage } from "../store/slices/paginationSlice";

import { useSelector } from "react-redux/es/hooks/useSelector";

import Pagination from "./Pagination";

import "./Characters.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

function Characters() {
  const [isLoading, setIsLoading] = useState(true);
  const [cutaways, setCutaways] = useState([]);
  const [size, setSize] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const currentName = useSelector((state) => state.pagination.currentName);
  const currentSpecies = useSelector(
    (state) => state.pagination.currentSpecies
  );
  const currentStatus = useSelector((state) => state.pagination.currentStatus);

  const loadCutaways = (page = null) => {
    setIsLoading(true);
    let url = `https://rickandmortyapi.com/api/character/?status=${currentStatus}&name=${currentName}&species=${currentSpecies}`;
    if (page) {
      url += `&page=${page}`;
    }

    axios.get(url).then(
      (data) => {
        setCutaways(data.data.results);
        setSize(data.data.info.pages);
        setIsLoading(false);
      },
      (error) => {
        if (error.response.status === 404) {
          setCutaways([]);
        }
      }
    );
  };

  const changePage = (page) => {
    dispatch(setCurrentPage(page));
    loadCutaways(page);
  };

  useEffect(() => {
    setCurrentPage(1);
    loadCutaways();
  }, [currentName, currentStatus, currentSpecies]);

  useEffect(() => {
    const queryString = qs.stringify({
      currentName,
      currentStatus,
      currentSpecies,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [currentName, currentStatus, currentSpecies, currentPage]);

  return (
    <>
      <SearchBlock />
      {cutaways.length ? (
        <>
          <div className="characters">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : cutaways.map((cutaway) => (
                  <Cutaway key={cutaway.id} {...cutaway} />
                ))}
          </div>

          <Pagination
            size={size}
            onChangePage={(number) => changePage(number)}
          />
        </>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
}

export default Characters;
