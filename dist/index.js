"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./config/logger"));
const morgan_1 = __importDefault(require("morgan"));
const error_1 = require("./middleware/error");
const route_1 = require("./route");
const secrets_1 = require("./secrets");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const database_1 = __importDefault(require("./config/database"));
const validateEnv_1 = require("./config/validateEnv");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env';
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, envFile) });
(0, validateEnv_1.validateEnvVariables)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? [process.env.FRONTEND_URL] // PROD ENV
    : '*'; // Allow all origins in DEV ENV
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins === '*' || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow cookies and Authorization headers, if any.
};
app.use((0, cors_1.default)(corsOptions));
app.options('*', (0, cors_1.default)(corsOptions));
(0, database_1.default)();
app.use('/api', route_1.apiRouter);
app.use((0, morgan_1.default)(':method :url :status :response-time ms', {
    stream: {
        write: (message) => logger_1.default.info(message.trim())
    }
}));
app.use(error_1.errorHandler);
app.listen(secrets_1.PORT, () => {
    logger_1.default.info(`Started Your Application on Port ${secrets_1.PORT}`);
});
