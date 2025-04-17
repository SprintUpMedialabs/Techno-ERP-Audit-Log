import express from 'express';
import { COLLECTION_NAMES } from './config/constants';
import { createLeadLog } from './controllers/marketingController';
export const apiRouter = express.Router();

apiRouter.post(`/marketing/${COLLECTION_NAMES.LEAD}`, createLeadLog);

