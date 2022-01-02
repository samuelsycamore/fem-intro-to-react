import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Homeboy" animal="dog" breed="Pyrenees" />
      <Pet name="Dingus Larry" animal="cat" breed="DSH" />
      <Pet name="Crumbus" animal="raccoon" breed="feral af" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
