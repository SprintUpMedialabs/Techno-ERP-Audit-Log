import createHttpError from "http-errors";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";

/**
 * Verify a JWT token
 * @param token - The token to verify
 * @returns Decoded token payload if valid, throws error if invalid
 */
export const verifyToken = (token: string): object | null => {
    try {
        return jwt.verify(token, JWT_SECRET) as object;
    } catch (error: any) {
        throw createHttpError(400, 'Invalid token');
    }
};