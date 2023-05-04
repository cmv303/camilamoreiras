import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <PortfolioContainer />
        {}
      </div>
    </Router>
  );
}

export default App;
