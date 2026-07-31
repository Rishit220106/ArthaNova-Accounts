import mongoose from 'mongoose';

export const getHealth = async (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  
  res.json({
    status: 'OK',
    database: isDbConnected ? 'connected' : 'disconnected',
    uptime: process.uptime()
  });
};
