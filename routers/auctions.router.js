import express from 'express';
import { getAllAuctions, createAuctions, getAuctionById, deleteAuctionById, updateAuctionById, getAuctionByPriceRange, getAuctionsByState } from '../controllers/auctions.controller.js';
const auctionRouter = express.Router();

auctionRouter.get('/', getAllAuctions)
auctionRouter.post('/', createAuctions)
auctionRouter.get('/price-range', getAuctionByPriceRange)
auctionRouter.get('/:id', getAuctionById)
auctionRouter.delete('/:id', deleteAuctionById)
auctionRouter.put('/:id', updateAuctionById)


export default auctionRouter