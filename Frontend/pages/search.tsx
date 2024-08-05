import Link from 'next/link';
import useSWR from 'swr';
import { AnimatePresence, motion } from 'framer-motion';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Button } from '../components/shared/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GridLoader } from 'react-spinners';

const Page = () => {
  const router = useRouter();
  const {
    query: { createdReserve, deletedReserve },
  } = router;

  const { user } = useUser();

  const [searchedActivity, setSearchedActivity] = useState<
    string | undefined
  >();
  const [selectedActivity, setSelectedActivity] = useState<
    string | undefined
  >();

  const { data: activityData } = useSWR(
    searchedActivity ? `/activities/search?term=${searchedActivity}` : null
  );

  return (
    <>
      <AnimatePresence>
        <div tw="flex flex-col items-center">
          <div tw="flex flex-row items-center justify-center bg-white rounded-xl py-1 px-2 my-2">
            <input
              type="text"
              name="searchedTerm"
              placeholder="Search"
              onChange={(event) => setSearchedActivity(event.target.value)}
              tw="font-medium"
            />
          </div>
          <div tw="text-secondary-400 font-medium">
            {' '}
            {activityData && activityData?.data?.length === 0 && (
              <>No resuts found</>
            )}
            {activityData && activityData?.data?.length !== 0 && (
              <>{activityData?.data?.length} results found</>
            )}
          </div>
        </div>

        {activityData?.data?.length > 0 && (
          <div tw="container my-1 p-1 border border-primary-200 shadow-sm rounded-lg grid grid-cols-1 gap-y-1">
            {activityData.data.map((activity, i) => {
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
                      <p tw="text-xl">
                        {activity.Weekday} {activity.Day}
                      </p>
                      <h4 tw="text-xl font-bold">{activity.Activity}</h4>
                      <p tw="inline text-xl font-semibold">
                        {activity.Start_Time}
                      </p>
                      {activity.Monitor != '' && (
                        <p tw="inline text-sm"> - {activity.Monitor}</p>
                      )}
                    </div>
                  </motion.div>
                );
              }
              if (activity.Activity_ID == selectedActivity) {
                return (
                  <motion.div
                    animate={{ height: 165 }}
                    initial={false}
                    transition={{ delay: 0.05 }}
                    exit={{ height: 165 }}
                    key={activity._id}
                    tw="border bg-white border-primary-100 shadow-2xl p-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-4 ring-secondary-300 flex-nowrap"
                    style={{ zIndex: 0 }}
                  >
                    <div>
                      <p tw="text-xl">
                        {activity.Weekday} {activity.Day}
                      </p>
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
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.28 }}
                      tw="flex flex-col items-center"
                    >
                      <Link
                        href={`/api/reserves/create?ActivityID=${activity.Activity_ID}&User=${user?.email}`}
                      >
                        <Button variant="neutral">Add reserve</Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </div>
        )}
        {!activityData && searchedActivity && (
          <div tw="flex flex-col justify-center items-center gap-2">
            <div tw="text-secondary-400 font-medium my-3">
              Searching activities...
            </div>
            <GridLoader color={'#14560D'} size={15} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default withPageAuthRequired(Page);
