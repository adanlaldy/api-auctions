import express from 'express';
import { getAllStates, createStates } from '../controllers/states.controller.js';
const statesRouter = express.Router();

statesRouter.get('/', getAllStates)
statesRouter.post('/createState', createStates)

export default statesRouter