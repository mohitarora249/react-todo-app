function TodoList({ todos, deleteTodoHdlr, toggleTodo }) {
  return (
    <ul className="w-64">
      {todos.map((todo, idx) => (
        <li
          className={`p-4 my-2 w-full rounded-md border-2 shadow-lg cursor-pointer flex justify-between items-center ${
            todo.isComplete
              ? "border-green-600 line-through"
              : "border-yellow-600 "
          }`}
          key={todo.id}
          value={idx}
          onClick={toggleTodo}
        >
          {todo.title}
          <span className="ml-0" onClick={() => deleteTodoHdlr(todo.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
