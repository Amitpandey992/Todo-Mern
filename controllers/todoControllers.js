import { TodoModel } from "../model/model.js";

export const getData = async (req, res) => {
  const data = await TodoModel.find();
  if (data.length === 0) {
    res.send([]);
  } else {
    res.status(200).send(data);
  }
};

export const addData = async (req, res) => {
  try {
    const { toDo } = req.body;

    if (!toDo) {
      return res.status(400).json({ error: "Task is required" });
    }

    await TodoModel.create({ toDo });
    res.status(201).json({ toDo });
    console.log(toDo);
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const editData = async (req, res) => {
  const { toDo } = req.body;
  const { id } = req.params;

  try {
    await TodoModel.findByIdAndUpdate(id, { toDo });
    res.status(200).send("updated successfully");
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await TodoModel.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).send("Task not found");
    }

    console.log("Deleted successfully:", deletedTask);
    res.status(200).send("Deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Internal Server Error");
  }
};
