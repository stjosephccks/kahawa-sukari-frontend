
import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;

export async function mongooseConnect(){
  try {
    await mongoose.connect(url);
    console.log('connection Successfull')
    
  } catch (error) {
    throw new Error('Error Connecting to Mongo Db')
    
  }
}
export default mongooseConnect;