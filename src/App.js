import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Org from "./components/Org";
import Time from "./components/Time";

function App() {
  return (
    <div style={{ display: "block", width: "100%" }}>
      <div style={{ width: "15%", float: "left", display: "inline-block" }}>
        <Navbar />
      </div>
      <div style={{ width: "85%", float: "left", display: "inline-block" }}>
        <Home />
        <Org />
        <Time />
      </div>
    </div>
  );
}

export default App;
