import { useState } from "react";

function AddTodo({ closeBtnHdlr, addTodoBtnHdlr }) {
  const [title, seTtitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodoBtnHdlr(title);
  };

  return (
    <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div class="bg-white px-16 py-10 rounded-md text-center relative">
        <form
          class="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleAddTodo}
        >
          <div class="mb-4">
            <label
              class="block text-xl mb-4 font-bold text-slate-500 my-4"
              for="title"
            >
              Add Todo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Todo"
              value={title}
              onChange={(e) => seTtitle(e.target.value)}
            />
          </div>
          <span className="bottom-4 absolute">
            <button
              className="border px-4 py-2 rounded-md text-md text-gray-400"
              onClick={closeBtnHdlr}
            >
              Cancel
            </button>
            <button
              className={`text-white font-bold py-2 px-4 rounded ml-2 ${
                title
                  ? "bg-blue-500 hover:bg-blue-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!title}
              type="submit"
            >
              Ok
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
