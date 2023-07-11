import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const elemment = useRoutes(routes);

  return <div className="App relative">{elemment}</div>;
}

export default App;
