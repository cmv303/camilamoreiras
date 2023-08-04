import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm.js";

test("should render the ContactForm component without errors", () => {
  render(<ContactForm />);
});
