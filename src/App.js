import "./App.css";
import "./NavTabs.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <PortfolioContainer />

        {/* <Router>
        <Routes>
          <Route path='*' element={} />
        </Routes>
      </Router> */}
      </div>
    </Router>
  );
}

export default App;
