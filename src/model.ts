import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the user document
interface FormDocument extends Document {
  _id: ObjectId;
  Name: string;
  Email: string;
  Contact: string;
  Socials: string;
  Industry: string;
  Designation: string;

}


const FormSchema = new mongoose.Schema({
  Name: { type: String },
  Email: { type: String},
  Contact:{type: String},
  Socials:{type: String},
  Industry:{type: String},
  Designation:{type: String},
}
)

const FormModel = mongoose.model<FormDocument>('Form',FormSchema);

export {FormModel,FormDocument};

