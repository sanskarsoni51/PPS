import dotenv from "dotenv";
import mongoose from "mongoose";
// const envPath = path.resolve(, '../.env'); // Adjust the path as needed
dotenv.config({ path: 'config.env' });
const url = 'mongodb+srv://PPS:industries@cluster0.7kpj7ae.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);
const db = mongoose.connection;
export default mongoose;
export { db };
