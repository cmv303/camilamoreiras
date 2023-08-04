import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

test("should render the Home component without errors", () => {
  render(<Home />);
});

test("should render the Home component within the Router without errors", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
});