import mongoose, { Schema, Document, Model } from "mongoose";

interface IUserResponse extends Document {
  userId: string;
  // questions: Record<string, any>;
  questions: Record<string, number | string | boolean>;
  risk?: number;
  diversity?: number;
  stability?: number;
}

const userResponseSchema = new Schema<IUserResponse>({
  userId: {
    type: String,
    required: true,
  },
  // questions: {
  //   type: Object,
  //   required: true,
  // },
  questions: {
    type: Map,
    of: Schema.Types.Mixed, // Allows mixed types for answers
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
});

const userResponse: Model<IUserResponse> =
  mongoose.models.userResponse ||
  mongoose.model<IUserResponse>("userResponse", userResponseSchema);

export default userResponse;
