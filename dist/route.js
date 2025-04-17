"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const marketingController_1 = require("./controllers/marketingController");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.post(`/marketing/${constants_1.COLLECTION_NAMES.LEAD}`, marketingController_1.createLeadLog);
exports.apiRouter.get(`/marketing/${constants_1.COLLECTION_NAMES.LEAD}/:documentId`, marketingController_1.getLeadLog);
