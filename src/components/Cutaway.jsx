import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Characters.css";
import Plus from "../assets/image/Plus.png";
import inFavorites from "../assets/image/in_favorites.svg";
import { useAuth } from "../Hooks/use-auth";
import { Link } from "react-router-dom";
import { addFavorite } from "../store/slices/userSlice";

function Cutaway({ id, image, name, species, status }) {
  const dispatch = useDispatch();
  const favoriteItem = useSelector((state) =>
    state.user.info.favorite.find((el) => el.id === id)
  );
  const [activeAdd, setActiveAdd] = useState(false);
  const { isAuth } = useAuth();

  const onClickAdd = () => {
    dispatch(
      addFavorite({
        id,
        image,
        name,
        species,
        status,
      })
    );
  };

  useEffect(() => {
    setActiveAdd(!!favoriteItem);
  }, [favoriteItem]);

  return (
    <>
      <div className="cutaway-container" style={{ position: "relative" }}>
        <Link
          to={"/detailed-cutaway" + "?id=" + id}
          style={{ textDecoration: "none" }}
        >
          <div
            className="cutaways"
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "45px",
              width: "570px",
              height: "163.5px",
              borderRadius: "5px",
              border: "1px dashed #A1A1A199",
              background: "#FFF",
              position: "relative",
            }}
          >
            <div key={id} className="cutaways__img">
              <img
                src={image}
                alt="cutaway"
                style={{
                  width: "163px",
                  height: "162px",
                  borderRadius: "4px 0px 0px 4px",
                }}
              />
            </div>
            <div className="cutaways__info">
              <div className="cutaways__name">
                <h3
                  key={id}
                  style={{
                    marginLeft: "15px",
                    marginTop: "14px",
                  }}
                >
                  {name}
                </h3>
              </div>
            </div>
          </div>
        </Link>
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
    </>
  );
}

export default Cutaway;
