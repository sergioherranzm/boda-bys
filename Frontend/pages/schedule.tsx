import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ActivityList } from '../components/ActivityList';
import { useEffect, useState } from 'react';
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { Alert } from '@mui/material';

const Page = () => {
  const { data: activityData } = useSWR(`/activities/list`);
  const router = useRouter();
  const {
    query: { existAlready },
  } = router;

  const tempArray = Array.from(
    new Set(
      activityData?.data
        .map((act) => ({
          date: act.Day,
          weekday: act.Weekday,
        }))
        .map(JSON.stringify)
    )
  ) as string[];
  const datesArray = tempArray.map((day, i) => JSON.parse(day));

  const [index, setIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(datesArray[index]);

  useEffect(() => {
    setSelectedDay(datesArray[index]);
  }, [index, datesArray]);

  const handlePrevious = () => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = index + 1;
    if (newIndex < datesArray.length) {
      setIndex(newIndex);
    }
  };

  return (
    <>
      {existAlready && (
        <Alert tw="my-2" severity="warning">
          The selected reserve already exists
        </Alert>
      )}
      <div tw="flex flex-col items-center">
        <div tw="flex flex-row items-center justify-center gap-x-10 sticky top-0 z-50 bg-primary-000 w-screen">
          <RiArrowLeftCircleFill size={60} onClick={handlePrevious} />
          {selectedDay?.date && (
            <div tw="flex flex-col items-center">
              <p tw="font-bold text-2xl">{selectedDay?.weekday}</p>
              <p tw="font-bold text-lg">{selectedDay?.date}</p>
            </div>
          )}
          <RiArrowRightCircleFill size={60} onClick={handleNext} />
        </div>
        <ActivityList selectedDay={selectedDay?.date} />
      </div>
    </>
  );
};

export default withPageAuthRequired(Page);
