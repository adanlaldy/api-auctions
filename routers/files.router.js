import express from "express";
import {
  getAllFiles,
  createFile,
  getFileById,
  deleteFileById,
  getFilesbyContentType,
  updateFileById
} from "../controllers/files.controller.js";
const filesRouter = express.Router();

filesRouter.get("/", getAllFiles);
filesRouter.post("/", createFile);
filesRouter.get("/:id", getFileById);
filesRouter.delete("/:id", deleteFileById);
filesRouter.get("/:content_type", getFilesbyContentType);
filesRouter.put("/:id", updateFileById);

export default filesRouter;