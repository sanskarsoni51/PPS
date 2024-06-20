import mongoose from "mongoose";
const FormSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String },
    Contact: { type: String },
    Company: { type: String },
    Socials: { type: String },
    Industry: { type: String },
    Designation: { type: String },
});
const FormModel = mongoose.model('Form', FormSchema);
export { FormModel };
