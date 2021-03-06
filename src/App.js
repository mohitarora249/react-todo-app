import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo-0",
      title: "Buy Bread",
      isComplete: true,
    },
    {
      id: "todo-1",
      title: "Pay Mobile Bill",
      isComplete: false,
    },
  ]);
  const [isDisplayAddTodoForm, setIsDisplayAddTodoForm] = useState(false);

  const toggleTodo = (e) => {
    const selectedTodoIdx = parseInt(e.target.value);
    const copy = [...todos];
    copy[selectedTodoIdx].isComplete = !copy[selectedTodoIdx].isComplete;
    setTodos(copy);
  };
  const toggleAddTodoBtnHdlr = () => {
    setIsDisplayAddTodoForm(!isDisplayAddTodoForm);
  };
  const addTodoBtnHdlr = (title) => {
    const copy = [...todos];
    copy.push({ id: `todo-${copy.length}`, title, isComplete: false });
    setTodos(copy);
    toggleAddTodoBtnHdlr(false);
  };

  const deleteTodoHdlr = (todoId) => {
    const copy = [...todos];
    setTodos(copy.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="h-screen flex flex-col items-center w-2/6 mx-auto">
      <h1 className="text-xl mb-4 font-bold text-slate-500 my-4">TODOS LIST</h1>
      <TodoList
        deleteTodoHdlr={deleteTodoHdlr}
        toggleTodo={toggleTodo}
        todos={todos}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleAddTodoBtnHdlr}
      >
        Add Todo
      </button>
      {isDisplayAddTodoForm && (
        <AddTodo
          closeBtnHdlr={toggleAddTodoBtnHdlr}
          addTodoBtnHdlr={addTodoBtnHdlr}
        />
      )}
    </div>
  );
}

export default App;
