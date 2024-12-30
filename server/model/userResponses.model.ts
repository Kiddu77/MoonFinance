import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUserResponse extends Document {
  userId: string;
  questions: Record<string, any>;
  risk?: number;
  diversity?: number;
  stability?: number;
}

const userResponseSchema: Schema<IUserResponse> = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    questions: {
      type: Object,
      required: true,
    },
    risk: {
      type: Number,
    },
    diversity: {
      type: Number,
    },
    stability: {
      type: Number,
    },
  }
);

const UserResponse: Model<IUserResponse> = mongoose.models.UserResponse || mongoose.model<IUserResponse>("UserResponse", userResponseSchema);

export default UserResponse;
