
import mongoose, { Schema, Document } from "mongoose";
import validator from "validator"

export interface EmailInterface extends Document {
  email: string;
}

const EmailSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value: string) => {
      return validator.isEmail(value)
    }
  }
});

const Email = mongoose.model<EmailInterface>("Book", EmailSchema);
export default Email;