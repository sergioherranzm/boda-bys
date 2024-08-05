import mongoose, { Schema, Document, Date } from 'mongoose';

export interface ActivityDocument extends Document {
  Activity_ID: string;
  Activity: string;
  Color: string;
  Day: string;
  End_Time: string;
  Monitor: string;
  Room: string;
  Start_Time: string;
  Status: string;
  Weekday: string;
  Activity_Start_Date: Date;
  Reserve_Start_Date: Date;
}

const ActivitySchema = new Schema<ActivityDocument>(
  {
    Activity_ID: {
      type: String,
      unique: true,
      required: [true, 'Please provide a Activity_ID'],
    },
    Activity: {
      type: String,
      required: [true, 'Please provide a Activity'],
    },
    Color: {
      type: String,
    },
    Day: {
      type: String,
      required: [true, 'Please provide a Day'],
    },
    End_Time: {
      type: String,
      required: [true, 'Please provide a End_Time'],
    },
    Monitor: {
      type: String,
    },
    Room: {
      type: String,
    },
    Start_Time: {
      type: String,
      required: [true, 'Please provide a Start_Time'],
    },
    Status: {
      type: String,
    },
    Weekday: {
      type: String,
      required: [true, 'Please provide a Weekday'],
    },
    Activity_Start_Date: {
      type: Date,
      required: [true, 'Please provide a Activity_Start_Date'],
    },
    Reserve_Start_Date: {
      type: Date,
      required: [true, 'Please provide a Reserve_Start_Date'],
    },
  },
  { timestamps: true }
);

export const ActivityModel =
  (mongoose.models.activities as mongoose.Model<ActivityDocument>) ||
  mongoose.model<ActivityDocument>('activities', ActivitySchema);
