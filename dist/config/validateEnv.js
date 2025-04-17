"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVariables = void 0;
const logger_1 = __importDefault(require("./logger"));
const requiredEnvVariables = [
    'PORT',
    'MONGODB_DATABASE_URL',
    'MONGODB_DATABASE_NAME',
    'JWT_SECRET',
];
const validateEnvVariables = () => {
    const missingVars = requiredEnvVariables.filter((envVar) => !process.env[envVar]);
    if (missingVars.length > 0) {
        logger_1.default.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
        process.exit(1); // Terminate the program
    }
};
exports.validateEnvVariables = validateEnvVariables;
