import { AppError } from '../utils/index.js';

// 404 Not Found Handler
export const notFoundHandler = (req, res, next) => {
  next(new AppError(`Not Found - ${req.originalUrl}`, 404));
};

// Central Error Handler
export const errorHandler = (err, req, res, next) => {
  // If headers have already been sent, delegate to the default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
  const status = err.status || 'error';

  res.status(statusCode).json({
    status,
    message: err.message,
    // Do not expose stack traces in production
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
