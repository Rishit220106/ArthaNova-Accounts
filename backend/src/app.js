import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { globalRateLimiter } from './middleware/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middleware/errorMiddleware.js';
import routes from './routes/index.js';

const app = express();

// Trust proxy configuration for Render
app.set('trust proxy', 1);

// Flexible CORS configuration for development and production
const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://arthanovaccounts.com',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or same-origin)
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy blocks access from origin: ${origin}`));
  },
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Helmet for security headers
app.use(helmet());

// Morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Global Rate Limiter
app.use(globalRateLimiter);

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Compression
app.use(compression());

// Routes
app.use('/', routes);

// 404 Handler
app.use(notFoundHandler);

// Central Error Handler
app.use(errorHandler);

export default app;
