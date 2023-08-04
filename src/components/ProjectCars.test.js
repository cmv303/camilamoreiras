import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard.js";

test("should render the ProjectCard component without errors", () => {
  render(<ProjectCard />);
});
