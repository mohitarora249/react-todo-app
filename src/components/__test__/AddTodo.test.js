import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodo from "../AddTodo";

describe("AddTodo", () => {
  test("should render ok btn", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("add_todo_ok_btn")).toBeInTheDocument();
  });

  test("should render cancel btn", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("add_todo_cancel_btn")).toBeInTheDocument();
  });

  test("should render input element for adding new todo", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("todo_title")).toBeInTheDocument();
  });

  test("initially todo input is empty", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("todo_title")).toBeEmptyDOMElement();
  });

  test("ok btn is disabled when input is empty", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("add_todo_ok_btn")).toBeDisabled();
  });

  test("ok btn is eabled when input has text", () => {
    render(<AddTodo />);
    fireEvent.change(screen.getByTestId("todo_title"), {
      target: { value: "sample todo" },
    });
    expect(screen.getByTestId("add_todo_ok_btn")).toBeEnabled();
  });

  test("todo is updating correctly", () => {
    render(<AddTodo />);
    fireEvent.change(screen.getByTestId("todo_title"), {
      target: { value: "sample todo" },
    });
    expect(screen.getByTestId("todo_title").value).toBe("sample todo");
  });

  test("ok btn closes the add todo popup", () => {
    const addTodoBtnHdlrMock = jest.fn();
    render(<AddTodo addTodoBtnHdlr={addTodoBtnHdlrMock} />);
    fireEvent.change(screen.getByTestId("todo_title"), {
      target: { value: "sample todo" },
    });
    fireEvent.click(screen.getByTestId("add_todo_ok_btn"));
    expect(addTodoBtnHdlrMock).toHaveBeenCalled();
  });
});
