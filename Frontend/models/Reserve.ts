import mongoose, { Schema, Document, Date } from 'mongoose';
import { ActivityDocument } from './Activity';
import { UserDocument } from './User';

export interface ReserveDocument extends Document {
  Activity_ID: string;
  Reserve_Owner: string;
  Reserve_Status: string;
  Reserve_Slot: string;
  Reserve_Start_Date: Date;
  Related_Activity_ID: ActivityDocument['_id'];
  Reserve_Owner_ID: UserDocument['_id'];
}

const ReserveSchema = new Schema<ReserveDocument>(
  {
    Activity_ID: {
      type: String,
      required: [true, 'Please provide a Activity_ID'],
    },
    Reserve_Owner: {
      type: String,
      required: [true, 'Please provide a Reserve_Owner'],
    },
    Reserve_Status: {
      type: String,
    },
    Reserve_Slot: {
      type: String,
    },
    Reserve_Start_Date: {
      type: Date,
      required: [true, 'Please provide a Reserve_Start_Date'],
    },
    Related_Activity_ID: {
      type: Schema.Types.ObjectId,
      ref: 'activities',
      required: true,
    },
    Reserve_Owner_ID: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true }
);

export const ReserveModel =
  (mongoose.models.reserves as mongoose.Model<ReserveDocument>) ||
  mongoose.model<ReserveDocument>('reserves', ReserveSchema);
