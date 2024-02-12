import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Todo from "./components/Todo";
import Popup from "./components/Popup";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUi, setUpdateUi] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [updateUi]);

  const saveTodo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        // console.log("data", res.data);
        setUpdateUi((prev) => !prev);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Todo List</h1>
      <div className="mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          onClick={saveTodo}
          className="bg-blue-500 text-white font-semibold px-10 py-2 rounded focus:outline-none hover:bg-blue-600 mt-2 transition-colors"
        >
          Add
        </button>
      </div>

      <div>
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo._id}
              text={todo.toDo}
              id={todo._id}
              setUpdateUi={setUpdateUi}
              setPopup={setPopup}
              setPopupContent={setPopupContent}
            />
          ))}
      </div>

      {popup && (
        <Popup
          setPopup={setPopup}
          popupContent={popupContent}
          setUpdateUi={setUpdateUi}
        />
      )}
    </div>
  );
};

export default App;
