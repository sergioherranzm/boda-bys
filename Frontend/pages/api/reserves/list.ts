import dbConnect from '../../../lib/dbConnect';
import { ReserveDocument, ReserveModel } from '../../../models/Reserve';
import { ActivityModel } from '../../../models/Activity';

export default async function handler(req, res) {
  await dbConnect();
  await ActivityModel.find(); //Necessary to populate if the user sends this "Reserve" HTTP request before doing a "Activity" HTTP request

  try {
    const reserves = (await ReserveModel.find({
      Reserve_Owner: req.query.User,
    })
      .sort({
        Reserve_Start_Date: 'ascending',
      })
      .populate('Related_Activity_ID')) as [ReserveDocument];

    res.status(200).json({ success: true, data: reserves });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
}
