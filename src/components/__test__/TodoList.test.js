import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList", () => {
  test("should render <TodoList /> component", () => {
    render(
      <TodoList deleteTodoHdlr={jest.fn()} toggleTodo={jest.fn()} todos={[]} />
    );
    expect(screen.getByTestId("todo_list")).toBeInTheDocument();
  });

  test("should render 2 todos", () => {
    const TODOS = [
      { id: 1, title: "Buy Milk" },
      { id: 2, title: "Buy Bread" },
    ];
    render(
      <TodoList
        deleteTodoHdlr={jest.fn()}
        toggleTodo={jest.fn()}
        todos={TODOS}
      />
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
