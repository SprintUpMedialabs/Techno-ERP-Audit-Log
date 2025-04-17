"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIdSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
exports.objectIdSchema = zod_1.z.custom((id) => {
    return mongoose_1.default.Types.ObjectId.isValid(id);
}, { message: "This is not a valid ObjectId" });
