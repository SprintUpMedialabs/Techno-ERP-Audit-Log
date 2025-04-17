import mongoose from 'mongoose';
import { MONGODB_DATABASE_NAME, MONGODB_DATABASE_URL } from '../secrets';
import logger from './logger';

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_DATABASE_URL, {
      dbName: MONGODB_DATABASE_NAME
    });
    logger.info('Database connected successfully !');
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
