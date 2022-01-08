import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("app title rendered", () => {
  render(<App />);
  expect(screen.getByTestId("todo_title")).toHaveTextContent("TODOS LIST");
});

test("add todo btn rendered", () => {
  render(<App />);
  expect(screen.getByTestId("add_todo_btn")).toBeInTheDocument();
});

test("add todo btn text is correct", () => {
  render(<App />);
  expect(screen.getByTestId("add_todo_btn")).toHaveTextContent("Add Todo");
});

test("add todo btn click renders add todo popup", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("add_todo_btn"));
  expect(screen.getByTestId("add_todo_popup")).toBeInTheDocument();
});
