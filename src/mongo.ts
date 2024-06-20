import dotenv from "dotenv";
import mongoose from "mongoose";

// const envPath = path.resolve(, '../.env'); // Adjust the path as needed

dotenv.config({ path: 'config.env' });

const url = process.env.DatabaseUrl || 'default-fallback-url';

mongoose.connect(url);
  
const db = mongoose.connection;

 export default mongoose;
 export {db};