// lib/mongoose.js
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

let isConnected;

export async function mongooseConnect() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(url);
    console.log('Connection Successful');
    isConnected = true;
  } catch (error) {
    console.log('Error Connecting to MongoDB', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default mongooseConnect;
