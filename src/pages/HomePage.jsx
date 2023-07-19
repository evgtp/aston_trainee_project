import Information from "../components/Information";
import Characters from "../components/Characters";

function HomePage() {
  return (
    <div
      className="content"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Information />
      <h1>Characters</h1>

      <Characters />
    </div>
  );
}

export default HomePage;
