import React from "react";
import Plus from "../assets/image/Plus.png";
import { useAuth } from "../Hooks/use-auth";

function AddButton() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div
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
    <></>
  );
}

export default AddButton;
