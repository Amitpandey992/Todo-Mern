import React, { useState } from "react";
import { baseURL } from "../utils/constant";
import axios from "axios";

const Popup = ({ setPopup, popupContent, setUpdateUi }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateTodo = () => {
    axios
      .put(`${baseURL}/edit/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUi((prev) => !prev);
        setPopup(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-1/2">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-700">Update Todo</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border text-gray-700 border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter todo..."
          />
          <div className="flex justify-end">
            <button
              onClick={() => setPopup(false)}
              className="text-gray-500 font-semibold px-4 py-2 mr-2 focus:outline-none hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={updateTodo}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded focus:outline-none hover:bg-blue-600 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
