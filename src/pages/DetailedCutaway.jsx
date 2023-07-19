import { useEffect, useState } from "react";
import axios from "axios";

import Detail from "../components/Detail";
import { useSearchParams } from "react-router-dom";

function DetailedCutaway() {
  const [id, setId] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

  const [cutaway, setCutaway] = useState();

  useEffect(() => {
    const idParam = searchParams.get("id");
    idParam && setId(idParam);
  }, []);

  useEffect(() => {
    if (!id) return;
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(url).then((data) => {
      setCutaway(data.data);
    });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="detail-cutaway">
        {cutaway && (
          <Detail
            key={cutaway.id}
            id={cutaway.id}
            image={cutaway.image}
            name={cutaway.name}
            species={cutaway.species}
            status={cutaway.status}
            gender={cutaway.gender}
            location={cutaway.location.name}
            origin={cutaway.origin.name}
          />
        )}
      </div>
    </>
  );
}

export default DetailedCutaway;
