import dbConnect from '../../../lib/dbConnect';
import { ActivityDocument, ActivityModel } from '../../../models/Activity';
import { ReserveDocument, ReserveModel } from '../../../models/Reserve';
import { UserDocument, UserModel } from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const deletedReserve = await ReserveModel.deleteOne({
      _id: req.query.ActivityID,
    });

    //res.status(200).json({ success: true, data: newReserve });
    res.redirect(`/reserves/list?deletedReserve=true`);
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
}
