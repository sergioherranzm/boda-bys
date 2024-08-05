import Link from 'next/link';
import useSWR from 'swr';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert } from '@mui/material';
import { Button } from '../../components/shared/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GridLoader } from 'react-spinners';

const Page = () => {
  const router = useRouter();
  const {
    query: { createdReserve, deletedReserve },
  } = router;

  const [selectedActivity, setSelectedActivity] = useState<
    string | undefined
  >();

  return (
    <>
      <AnimatePresence>
        {createdReserve && (
          <Alert tw="my-2" severity="success">
            New reserve created
          </Alert>
        )}
        {deletedReserve && (
          <Alert tw="my-2" severity="error">
            Reserve deleted.
            <p>
              WARNING: If the reserve was already performed, remember to also
              delete the reserve in My GO fit app
            </p>
          </Alert>
        )}
        {0 > 0 && (
          <div tw="container my-1 p-1 border border-primary-200 shadow-sm rounded-lg grid grid-cols-1 gap-y-2">
            {[].map((reserve, i) => {
              if (
                reserve.Related_Activity_ID?.Activity_ID != selectedActivity
              ) {
                return (
                  <motion.div
                    whileTap={{ height: 240 }}
                    initial={{ height: 160 }}
                    transition={{ delay: 0.05 }}
                    exit={{ height: 160 }}
                    key={reserve._id}
                    tw="border border-primary-100 shadow-2xl p-2 rounded-lg flex flex-row justify-between w-full hover:ring-4 ring-secondary-300 flex-wrap items-start"
                    style={{
                      zIndex: 0,
                      backgroundColor: reserve.Related_Activity_ID?.Color,
                    }}
                    onClick={() =>
                      setSelectedActivity(
                        reserve.Related_Activity_ID?.Activity_ID
                      )
                    }
                  >
                    <div>
                      <p tw="text-xl">
                        {reserve.Related_Activity_ID?.Weekday}{' '}
                        {reserve.Related_Activity_ID?.Day}
                      </p>
                      <h4 tw="text-xl font-bold">
                        {reserve.Related_Activity_ID?.Activity}
                      </h4>
                      <p tw="inline text-xl font-semibold">
                        {reserve.Related_Activity_ID?.Start_Time}
                      </p>
                      {reserve.Related_Activity_ID?.Monitor != '' && (
                        <p tw="inline text-sm">
                          {' '}
                          - {reserve.Related_Activity_ID?.Monitor}
                        </p>
                      )}
                      {!reserve.Related_Activity_ID && (
                        <div>
                          <p tw="font-black inline">{reserve.Activity_ID}</p>
                        </div>
                      )}
                      <div tw="mt-2">
                        <p tw="inline">STATUS: </p>
                        <p tw="font-black inline">{reserve.Reserve_Status}</p>
                        {reserve.Reserve_Status === '' && (
                          <p tw="font-black inline"> PENDING</p>
                        )}
                      </div>
                      {reserve.Reserve_Slot != '' && (
                        <div tw="">
                          <p tw="inline">SLOT: </p>
                          <p tw="font-black inline">{reserve.Reserve_Slot}</p>
                        </div>
                      )}
                    </div>
                    {createdReserve === reserve._id && (
                      <div tw="bg-red-600 px-1 text-xl rounded-md font-semibold max-w-max">
                        NEW
                      </div>
                    )}
                  </motion.div>
                );
              }
              if (
                reserve.Related_Activity_ID?.Activity_ID == selectedActivity
              ) {
                return (
                  <motion.div
                    animate={{ height: 240 }}
                    initial={{ height: 160 }}
                    transition={{ delay: 0.05 }}
                    exit={{ height: 160 }}
                    key={reserve._id}
                    tw="border bg-white border-primary-100 shadow-2xl p-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-4 ring-secondary-300 flex-nowrap"
                    style={{ zIndex: 0 }}
                  >
                    <div>
                      <p tw="text-xl">
                        {reserve.Related_Activity_ID?.Weekday}{' '}
                        {reserve.Related_Activity_ID?.Day}
                      </p>
                      <h4 tw="text-xl font-bold">
                        {reserve.Related_Activity_ID?.Activity}
                      </h4>
                      <p tw="text-xl font-semibold">
                        {reserve.Related_Activity_ID?.Start_Time} -{' '}
                        {reserve.Related_Activity_ID?.End_Time}
                      </p>
                      {reserve.Related_Activity_ID?.Monitor != '' && (
                        <p tw="inline text-sm">
                          {reserve.Related_Activity_ID?.Monitor} -{' '}
                        </p>
                      )}
                      {reserve.Related_Activity_ID?.Room != '' && (
                        <p tw="inline text-sm">
                          {reserve.Related_Activity_ID?.Room}
                        </p>
                      )}
                    </div>
                    {!reserve.Related_Activity_ID && (
                      <div>
                        <p tw="font-black inline">{reserve.Activity_ID}</p>
                      </div>
                    )}
                    <div tw="mt-2">
                      <p tw="inline">STATUS: </p>
                      <p tw="font-black inline">{reserve.Reserve_Status}</p>
                      {reserve.Reserve_Status === '' && (
                        <p tw="font-black inline"> PENDING</p>
                      )}
                    </div>
                    {reserve.Reserve_Slot != '' && (
                      <div tw="">
                        <p tw="inline">SLOT: </p>
                        <p tw="font-black inline">{reserve.Reserve_Slot}</p>
                      </div>
                    )}
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.28 }}
                      tw="flex flex-col items-center"
                    >
                      <Link
                        href={`/api/reserves/delete?ActivityID=${reserve._id}`}
                      >
                        <Button variant="delete">Delete</Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              }
            })}
          </div>
        )}
        {true && (
          <div tw="flex flex-col justify-center items-center gap-2">
            <div tw="text-secondary-400 font-medium my-3">
              Loading reserves...
            </div>
            <GridLoader color={'#14560D'} size={15} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;
