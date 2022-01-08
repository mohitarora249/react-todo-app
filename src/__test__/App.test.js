import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("should render toods list title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /todos list/i })
  ).toBeInTheDocument();
});

test("should render add todo btn", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "Add Todo" })).toBeInTheDocument();
});

test("should open add todo popup", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Add Todo" }));
  expect(screen.getByTestId("add_todo_popup")).toBeInTheDocument();
});
