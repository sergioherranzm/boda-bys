import moment from 'moment';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const weddind_date = moment('2025-08-30 11:00:00');
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

  const [time, setTime] = useState(999999);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div tw="mt-2">
      {/*<p>{weddind_date.format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{now_date.format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{diff_days_round} días</p>
      <p>{diff_hour_round} horas</p>
      <p>{diff_min_round} minutos</p>
      <p>{diff_sec_round} segundos</p>*/}
      <p>
        ¡Quedan {diff_days_round} días, {diff_hour_round} horas,{' '}
        {diff_min_round} minutos y {diff_sec_round} segundos!
      </p>
    </div>
  );
};
