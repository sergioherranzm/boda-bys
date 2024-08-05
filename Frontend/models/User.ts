import mongoose, { Schema, Document, Date } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  user: string;
}

const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  user: {
    type: String,
    required: [true, 'Please provide an email'],
  },
});

UserSchema.virtual('reserves', {
  ref: 'reserves',
  localField: '_id',
  foreignField: 'Reserve_Owner_ID',
});

export const UserModel =
  (mongoose.models.users as mongoose.Model<UserDocument>) ||
  mongoose.model<UserDocument>('users', UserSchema);
