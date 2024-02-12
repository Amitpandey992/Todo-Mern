import axios from "axios";
import React from "react";
import { baseURL } from "../utils/constant";

const Todo = ({ text, id, setUpdateUi, setPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUi((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = () => {
    setPopupContent({ text, id });
    setPopup(true);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <span className="text-lg text-gray-300">{text}</span>
      <div className="space-x-2">
        <button
          onClick={updateTodo}
          className="text-blue-500 font-semibold px-3 py-1 rounded-full focus:outline-none hover:bg-blue-100 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={deleteTodo}
          className="text-red-500 font-semibold px-3 py-1 rounded-full focus:outline-none hover:bg-red-100 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
