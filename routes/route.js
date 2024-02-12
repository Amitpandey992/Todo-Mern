import express from "express";
import {
  addData,
  getData,
  editData,
  deleteData,
} from "../controllers/todoControllers.js";

export const router = express.Router();

router.route("/get").get(getData);
router.route("/save").post(addData);
router.route("/edit/:id").put(editData);
router.route("/delete/:id").delete(deleteData);
