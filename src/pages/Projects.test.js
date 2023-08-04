import React from "react";
import { render } from "@testing-library/react";
import Projects from "./Projects.js";

test("should render the Projects component without errors", () => {
  render(<Projects />);
});
