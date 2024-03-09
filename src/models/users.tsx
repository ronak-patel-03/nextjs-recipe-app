import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface UserDocument extends Document {
  _id: string;
  username: string;
  password: string;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  generateAuthToken: () => string;
}

const userSchema = new mongoose.Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAuthToken = function (): string {
  return jwt.sign({ _id: this._id, username: this.username }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN!,
  });
};

const User: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User;
