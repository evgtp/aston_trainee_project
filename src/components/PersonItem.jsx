import React from "react";
import { useDispatch } from "react-redux";
import Cross from "../assets/image/cross.svg";

import "../components/Characters.css";
import { removeFavorite } from "../store/slices/userSlice";

function PersonItems({ id, image, name }) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeFavorite(id));
  };

  return (
    <div
      className="cutaway__favorites"
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
      <div
        key={id}
        className="img"
        style={{
          width: "163px",
          height: "162px",
          borderRadius: "4px 0px 0px 4px",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "163px",
            height: "162px",
            borderRadius: "4px 0px 0px 4px",
          }}
        />
      </div>
      <div className="name__favorites">
        <h3 key={id} style={{ marginLeft: "15px", marginTop: "14px" }}>
          {name}
        </h3>
      </div>

      <div onClick={onClickRemove} className="btn__favorites">
        <img
          src={Cross}
          alt="icon"
          style={{
            position: "absolute",
            left: "15px",
            bottom: "6px",
          }}
        />
        <p
          style={{
            position: "absolute",
            right: "30px",
            bottom: "11px",
            color: "#fff",
          }}
        >
          Delete items
        </p>
      </div>
    </div>
  );
}

export default PersonItems;
