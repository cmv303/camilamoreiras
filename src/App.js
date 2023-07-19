import PortfolioContainer from "./components/PortfolioContainer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Router basename="/camilamoreiras">
      <div className="App">
        <PortfolioContainer />
      </div>
    </Router>
  );
}

export default App;
