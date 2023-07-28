// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
import PortfolioContainer from "./components/PortfolioContainer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  // const [theme, colorMode] = useMode();
  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
        <Router basename="/camilamoreiras">
          <div className="App">
            <PortfolioContainer />
          </div>
        </Router>
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
