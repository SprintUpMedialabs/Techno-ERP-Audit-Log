import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env';
dotenv.config({ path: path.resolve(__dirname, '../', envFile) });

export const MONGODB_DATABASE_URL = process.env.MONGODB_DATABASE_URL!;
export const PORT = process.env.PORT!;
export const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME!;
export const NODE_ENV = process.env.NODE_ENV!;
export const JWT_SECRET = process.env.JWT_SECRET!;