import express from 'express';
import { getAllTags, createTagController, getTagById, deleteTagById, updateTagById, getTagsByPostIdController, deleteTagByPostId } from "../controllers/tags.controller.js";
const tagRouter = express.Router();

tagRouter.get('/', getAllTags);
tagRouter.post('/', createTagController);
tagRouter.get('/:id', getTagById);
tagRouter.delete('/:id', deleteTagById);
tagRouter.put('/:id', updateTagById);
tagRouter.get('/post/:postId', getTagsByPostIdController);
tagRouter.delete('/post/:postId', deleteTagByPostId);

export default tagRouter;