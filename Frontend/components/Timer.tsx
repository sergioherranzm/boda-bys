import moment from 'moment';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const weddind_date = moment('2025-08-30 13:00:00');
  var now_date = moment();

  var diff = weddind_date.diff(now_date);
  var diff_days = diff / 1000 / 60 / 60 / 24;
  var diff_days_round = Math.trunc(diff_days);
  var diff_hour = (diff_days - diff_days_round) * 24;
  var diff_hour_round = Math.trunc(diff_hour);
  var diff_min = (diff_hour - diff_hour_round) * 60;
  var diff_min_round = Math.trunc(diff_min);
  var diff_sec = (diff_min - diff_min_round) * 60;
  var diff_sec_round = Math.trunc(diff_sec + 1);
  diff_sec_round = diff_sec_round == 60 ? 0 : diff_sec_round;

  var diff_hour_round_str = diff_hour_round.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  var diff_min_round_str = diff_min_round.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  var diff_sec_round_str = diff_sec_round.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }, [time]);

  return (
    <div tw="">
      {diff_sec_round > -1 && (
        <div>
          {/*<p suppressHydrationWarning>
            ¡Quedan {diff_days_round} días, {diff_hour_round} horas,{' '}
            {diff_min_round} minutos y {diff_sec_round} segundos!
          </p>*/}
          {/*<div tw="flex flex-col gap-1">
            <div tw="text-xl">Quedan </div>
            <div
              tw="flex justify-center align-bottom gap-1 text-2xl"
              className="font-digital"
            >
              <div
                suppressHydrationWarning
                tw="font-extrabold text-4xl bg-gray-900 text-white py-1 px-1 rounded"
              >
                {diff_days_round}
              </div>
              <div tw="leading-semi-loose">DIAS</div>{' '}
              <div
                suppressHydrationWarning
                className="font-digital"
                tw="font-bold text-4xl bg-gray-900 text-white py-1 px-1 rounded"
              >
                {diff_hour_round_str}:{diff_min_round_str}:{diff_sec_round_str}
              </div>
            </div>
          </div>
          <div tw="flex flex-col">
            <div
              suppressHydrationWarning
              className="font-digital"
              tw="font-bold text-4xl bg-black text-white py-1 w-screen"
            >
              {diff_days_round} DIAS &nbsp;{diff_hour_round_str}:
              {diff_min_round_str}:{diff_sec_round_str}
            </div>
          </div>*/}
          <div
            tw="flex justify-center bg-primary-300 text-white py-1 w-screen text-3xl font-medium"
            className="font-digital"
          >
            <div tw="font-thin leading-normal" className="style-script-regular">
              Quedan&nbsp;
            </div>
            <div suppressHydrationWarning>{diff_days_round}</div>
            <div tw="font-thin leading-normal" className="style-script-regular">
              &nbsp;días,&nbsp;
            </div>
            <div suppressHydrationWarning>
              {diff_hour_round_str}:{diff_min_round_str}:{diff_sec_round_str}
            </div>
          </div>
        </div>
      )}
      {diff_sec_round <= -1 && (
        <div
          tw="flex justify-center bg-primary-300 text-white py-1 w-screen text-3xl"
          className="style-script-regular"
        >
          ¡Que vivan los novios!
        </div>
      )}
    </div>
  );
};
