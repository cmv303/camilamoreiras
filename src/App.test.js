import React from "react";
import { render } from "@testing-library/react";
import App from "./App.js";

test("should render the App component without errors", () => {
  render(<App />);
});