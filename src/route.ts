import express from 'express';
import { COLLECTION_NAMES } from './config/constants';
import { createLeadLog, getLeadLog } from './controllers/marketingController';
export const apiRouter = express.Router();

apiRouter.post(`/marketing/${COLLECTION_NAMES.LEAD}`, createLeadLog);

apiRouter.get(`/marketing/${COLLECTION_NAMES.LEAD}/:documentId`, getLeadLog);
