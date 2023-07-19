import Plus from "../assets/image/Plus.png";
import inFavorites from "../assets/image/in_favorites.svg";
import { useAuth } from "../Hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { addFavorite } from "../store/slices/userSlice";

function Detail({
  id,
  image,
  name,
  species,
  status,
  gender,
  location,
  origin,
}) {
  const favoriteItem = useSelector((state) =>
    state.user.info.favorite.find((el) => el.id === id)
  );

  const { isAuth } = useAuth();

  const dispatch = useDispatch();

  const [activeAdd, setActiveAdd] = useState(false);

  const onClickAdd = () => {
    const item = {
      id,
      image,
      name,
      species,
      status,
    };
    dispatch(addFavorite(item));
    setActiveAdd(true);
  };

  useEffect(() => {
    setActiveAdd(!!favoriteItem);
  }, [favoriteItem]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "45px",
        width: "700px",
        height: "300px",
        borderRadius: "5px",
        border: "1px dashed #A1A1A199",
        background: "#FFF",
        position: "relative",
        marginLeft: "450px",
      }}
    >
      <div key={id} className="cutaways__img">
        <img
          src={image}
          alt="cutaway"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "4px 0px 0px 4px",
          }}
        />
      </div>
      <div className="cutaways__info">
        <div
          className="cutaways__detail"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <h3 key={id} style={{ marginLeft: "15px", marginTop: "14px" }}>
            {name}
          </h3>
          <span>species: {species}</span>
          <span>gender: {gender}</span>
          <span>location: {location}</span>
          <span>origin: {origin}</span>
          <span>status: {status}</span>
        </div>
      </div>
      {isAuth ? (
        <>
          {activeAdd === false ? (
            <div
              onClick={onClickAdd}
              className="add-button"
              style={{
                width: "190px",
                height: "41px",
                borderRadius: "5px",
                border: "1px solid #A1A1A199",
                background: "#00A3FF",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <img
                src={Plus}
                alt="plus"
                style={{
                  position: "absolute",
                  left: "15px",
                  bottom: "11px",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  right: "13px",
                  bottom: "11px",
                }}
              >
                Add to favorites
              </p>
            </div>
          ) : (
            <div
              style={{
                width: "190px",
                height: "41px",
                background: "#fff",
                position: "absolute",
                bottom: "15px",
                right: "15px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <img
                src={inFavorites}
                alt="plus"
                style={{
                  position: "absolute",
                  left: "15px",
                  bottom: "11px",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  right: "45px",
                  bottom: "11px",
                  color: "#000",
                }}
              >
                In favorites
              </p>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Detail;
