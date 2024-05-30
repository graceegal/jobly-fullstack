import { test, expect } from "vitest";
import { render } from "@testing-library/react";

import App from "./App.jsx";

test("should render without crashing", function () {
  render(<App />);
});

test("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
