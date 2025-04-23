export const config = () => ({
  port: parseInt(process?.env?.PORT ?? '3000', 10),
  logger: process?.env?.PORT?.toUpperCase() === 'TRUE',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process?.env?.DATABASE_PORT ?? '5432', 10),
  },
});
