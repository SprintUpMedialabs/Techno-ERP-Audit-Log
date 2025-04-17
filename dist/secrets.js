"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.NODE_ENV = exports.MONGODB_DATABASE_NAME = exports.PORT = exports.MONGODB_DATABASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env';
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../', envFile) });
exports.MONGODB_DATABASE_URL = process.env.MONGODB_DATABASE_URL;
exports.PORT = process.env.PORT;
exports.MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
exports.NODE_ENV = process.env.NODE_ENV;
exports.JWT_SECRET = process.env.JWT_SECRET;
