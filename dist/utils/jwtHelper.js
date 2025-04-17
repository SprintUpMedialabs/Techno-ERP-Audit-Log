"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
/**
 * Verify a JWT token
 * @param token - The token to verify
 * @returns Decoded token payload if valid, throws error if invalid
 */
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, secrets_1.JWT_SECRET);
    }
    catch (error) {
        throw (0, http_errors_1.default)(400, 'Invalid token');
    }
};
exports.verifyToken = verifyToken;
