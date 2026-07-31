import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import connectDB from './src/config/db.js';
import Admin from './src/models/Admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const seedAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL || 'amisampatacca@gmail.com';
    const existing = await Admin.findOne({ email });

    if (existing) {
      existing.name = 'Ami Sampat';
      existing.password = 'ami@0812ACCA';
      await existing.save();
      console.log(`✅ Admin user updated successfully: Ami Sampat (${email})`);
    } else {
      await Admin.create({
        name: 'Ami Sampat',
        email,
        password: 'ami@0812ACCA',
        role: 'admin'
      });
      console.log(`✅ Admin user created successfully: Ami Sampat (${email})`);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to seed admin user:', error.message);
    process.exit(1);
  }
};

seedAdmin();
