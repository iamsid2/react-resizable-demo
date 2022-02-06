import Window1 from "./components/Window1";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Window3 from "./components/Window3";
import Window2 from "./components/Window2";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <Window2 />
          </div>
          <div className="col-md">
            <Window1 />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <Window3 />
          </div>
        </div>
      </div>
    </div>
  );
}
