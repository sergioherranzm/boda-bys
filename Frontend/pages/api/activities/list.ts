import dbConnect from '../../../lib/dbConnect';
import { ActivityDocument, ActivityModel } from '../../../models/Activity';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const activities = (await ActivityModel.find().sort({
      Reserve_Start_Date: 'ascending',
    })) as [ActivityDocument];
    res.status(200).json({ success: true, data: activities });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
