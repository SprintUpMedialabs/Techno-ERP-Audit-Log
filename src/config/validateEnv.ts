import logger from './logger';

const requiredEnvVariables = [
  'PORT',
  'MONGODB_DATABASE_URL',
  'MONGODB_DATABASE_NAME',
  'JWT_SECRET',
];

export const validateEnvVariables = (): void => {
  const missingVars = requiredEnvVariables.filter((envVar) => !process.env[envVar]);
  if (missingVars.length > 0) {
    logger.error(`❌ Missing required environment variables: ${missingVars.join(', ')}`);
    process.exit(1); // Terminate the program
  }
};
