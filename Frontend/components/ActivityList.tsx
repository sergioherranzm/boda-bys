import Link from 'next/link';
import useSWR from 'swr';
import { Button } from './shared/Button';
import { GridLoader } from 'react-spinners';
import { AnimatePresence, motion } from 'framer-motion';
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';

export const ActivityList = ({ selectedDay }) => {
  const { user } = useUser();
  const { data: activityData } = useSWR(
    `/activities/listByDay?selectedDay=${selectedDay}`
  );
  const { data: reserveData } = useSWR(
    user?.email ? `/reserves/list?User=${user?.email}` : null
  );
  const idArray = reserveData?.data
    ? reserveData?.data?.map((reser) => reser.Activity_ID)
    : null;
  const statusArray = reserveData?.data
    ? reserveData?.data?.map(function (reser) {
        if (reser.Reserve_Status != '') {
          return reser.Reserve_Status;
        } else {
          return 'PENDING...';
        }
      })
    : null;

  const [selectedActivity, setSelectedActivity] = useState<
    string | undefined
  >();

  return (
    <>
      <AnimatePresence>
        {activityData?.data?.length > 0 && (
          <div tw="container my-1 p-1 border border-primary-200 shadow-sm rounded-lg grid grid-cols-1 gap-y-1">
            {activityData?.data?.map((activity, i) => {
              if (activity.Activity_ID != selectedActivity) {
                return (
                  <motion.div
                    whileTap={{ height: 140 }}
                    initial={{ height: 100 }}
                    transition={{ delay: 0.05 }}
                    exit={{ height: 100 }}
                    key={activity._id}
                    tw="border border-primary-100 shadow-2xl p-2 rounded-lg flex flex-row justify-between w-full hover:ring-4 ring-secondary-300 flex-wrap"
                    style={{ zIndex: 0, backgroundColor: activity.Color }}
                    onClick={() => setSelectedActivity(activity.Activity_ID)}
                  >
                    <div>
                      <h4 tw="text-xl font-bold">{activity.Activity}</h4>
                      <p tw="inline text-xl font-semibold">
                        {activity.Start_Time}
                      </p>
                      {activity.Monitor != '' && (
                        <p tw="inline text-sm"> - {activity.Monitor}</p>
                      )}
                    </div>
                    <div>
                      {idArray?.includes(activity.Activity_ID) && (
                        <p tw="text-xl font-black border-2 rounded-lg p-1 border-black">
                          {statusArray[idArray.indexOf(activity.Activity_ID)]}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              }
              if (activity.Activity_ID == selectedActivity) {
                return (
                  <motion.div
                    animate={{ height: 140 }}
                    initial={false}
                    transition={{ delay: 0.05 }}
                    exit={{ height: 100 }}
                    key={activity._id}
                    tw="border bg-white border-primary-100 shadow-2xl p-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-4 ring-secondary-300 flex-nowrap"
                    style={{ zIndex: 0 }}
                  >
                    <div tw="flex flex-row justify-between w-full flex-wrap">
                      <div>
                        <h4 tw="text-xl font-bold">{activity.Activity}</h4>
                        <p tw="text-xl font-semibold">
                          {activity.Start_Time} - {activity.End_Time}
                        </p>
                        {activity.Monitor != '' && (
                          <p tw="inline text-sm">{activity.Monitor} - </p>
                        )}
                        {activity.Room != '' && (
                          <p tw="inline text-sm">{activity.Room}</p>
                        )}
                      </div>
                      <div>
                        {idArray?.includes(activity.Activity_ID) && (
                          <p tw="text-xl font-black border-2 rounded-lg p-1 border-black">
                            {statusArray[idArray.indexOf(activity.Activity_ID)]}
                          </p>
                        )}
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.28 }}
                      tw="flex flex-col items-center"
                    >
                      {!idArray?.includes(activity.Activity_ID) && (
                        <Link
                          href={`/api/reserves/create?ActivityID=${activity.Activity_ID}&User=${user?.email}`}
                        >
                          <Button variant="neutral">Add reserve</Button>
                        </Link>
                      )}
                      {idArray?.includes(activity.Activity_ID) && (
                        <a href="/reserves/list">
                          <Button variant="neutral">View reserves</Button>
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </div>
        )}

        {!activityData && (
          <div tw="flex flex-col justify-center items-center gap-2">
            <div tw="text-secondary-400 font-medium my-3">
              Loading activities...
            </div>
            <GridLoader color={'#14560D'} size={15} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};