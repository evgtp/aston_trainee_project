import "./NotFoundPage.css";

import NotFound from "../assets/image/404.svg";
import House from "../assets/image/house.png";

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <img src={NotFound} alt="" />
      <h2>Success It seems you are lost. Just don't panic!</h2>
      <p>The page you are looking for does not exist or has been removed.</p>
      <Link to="/">
        <button>
          <img src={House} alt="" />
          <p>Home</p>
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
