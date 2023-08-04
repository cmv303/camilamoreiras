import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavTabs from "./NavTabs";

test("should render the NavTabs component without errors", () => {
  render(
    <MemoryRouter>
      <NavTabs />
    </MemoryRouter>
  );
});