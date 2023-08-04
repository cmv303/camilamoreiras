import React from "react";
import { render } from "@testing-library/react";
import Intro from "./Intro";

test("should render the Intro component without errors", () => {
  render(<Intro />);
});
