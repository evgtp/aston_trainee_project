import { useSelector } from "react-redux";
import PersonItems from "../components/PersonItem";
import "../components/Characters.css";

function FavoritesPage() {
  const items = useSelector((state) => state.user.info.favorite);

  if (items.length < 1) {
    return (
      <div className="favorites-title" style={{ textAlign: "center" }}>
        <h2>You don't have any featured characters yet</h2>
      </div>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>
      <div className="content__items">
        {items.map((item) => (
          <PersonItems key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
