import 'dotenv/config';
import app from './app.js';
import connectDB, { closeDBConnection } from './config/db.js';

const PORT = process.env.PORT || 5000;

// Validate required email environment variables on server startup
if (!process.env.FROM_EMAIL) {
  console.warn('⚠️ WARNING: Missing required environment variable: FROM_EMAIL');
}
if (!process.env.ADMIN_EMAIL) {
  console.warn('⚠️ WARNING: Missing required environment variable: ADMIN_EMAIL');
}

// Connect to MongoDB
connectDB();

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => {
    closeDBConnection();
  });
});

// Handle graceful shutdown on SIGTERM (e.g., Render deployment)
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('HTTP server closed.');
    closeDBConnection();
  });
});

// Handle graceful shutdown on SIGINT (e.g., Ctrl+C)
process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('HTTP server closed.');
    closeDBConnection();
  });
});
