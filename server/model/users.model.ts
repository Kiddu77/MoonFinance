import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  mobileNumber?: string;
  password?: string;
  userUid: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    userUid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users: Model<IUser> = mongoose.models.Users || mongoose.model<IUser>("Users", userSchema);

export default Users;
