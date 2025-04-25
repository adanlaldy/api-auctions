import express from 'express';
import { getAllPictures, createNewPicture, getPictureById, deletePictureById, getPicturesByAuctionId, deletePicturesByAuctionId, updatePictureById } from "../controllers/pictures.controller.js";
const pictureRouter = express.Router();

pictureRouter.get('/', getAllPictures)
pictureRouter.post('/', createNewPicture)
pictureRouter.get('/:id', getPictureById)
pictureRouter.delete('/:id', deletePictureById)
pictureRouter.get('/:auction_id', getPicturesByAuctionId)
pictureRouter.delete('/:auction_id', deletePicturesByAuctionId)
pictureRouter.put('/:id', updatePictureById)

export default pictureRouter