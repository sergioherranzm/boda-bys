import dbConnect from '../../../lib/dbConnect';
import { ActivityDocument, ActivityModel } from '../../../models/Activity';
import { ReserveDocument, ReserveModel } from '../../../models/Reserve';
import { UserDocument, UserModel } from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const existAlready = (await ReserveModel.findOne({
      Reserve_Owner: req.query.User,
      Activity_ID: req.query.ActivityID,
    })) as ReserveDocument;

    if (existAlready) {
      res.redirect(`/schedule?existAlready=true`);
    } else {
      const user = (await UserModel.findOne({
        user: req.query.User,
      })) as UserDocument;

      const activity = (await ActivityModel.findOne({
        Activity_ID: req.query.ActivityID,
      })) as ActivityDocument;

      const newReserveData = <ReserveDocument>{
        Activity_ID: activity.Activity_ID,
        Related_Activity_ID: activity._id,
        Reserve_Owner: req.query.User,
        Reserve_Owner_ID: user._id,
        Reserve_Start_Date: activity.Reserve_Start_Date,
        Reserve_Status: '',
        Reserve_Slot: '',
      };

      const newReserve = await ReserveModel.create(newReserveData);

      //res.status(200).json({ success: true, data: newReserve });
      res.redirect(`/reserves/list?createdReserve=${newReserve._id}`);
    }
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
}
