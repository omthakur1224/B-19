import { useEffect, useState } from 'react';
type Time = {
  seconds: number;
  minutes: number;
  hours: number;
};
const useClock = () => {
  // TODO
  const [time, setTime] = useState<Time>({
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });

  // setInterval(() => {
  //   var date = new Date();
  //   setTime({
  //     seconds: date.getSeconds(),
  //     minutes: date.getMinutes(),
  //     hours: date.getHours(),
  //   });
  // }, 1000);
  const { hours, minutes, seconds } = time;
  // refer readme.md for what to return
  return { hours, minutes, seconds };
};

export default useClock;

// return {
//   hours: /** Current time in hours */,
//   minutes: /** Current time in minutes */,
//   seconds: /** Current time in seconds */,
//  };

// another approach
// import { useState } from "react";

// const useClock = () => {
// const [sec,setsec]=useState<number>(0)
// let arr=new Date().toTimeString().split(" ")
// let time=arr[0].split(':')

// let [hours,minutes,seconds]=time;
// setInterval(()=>setsec(sec+1),1000)
// return {hours,minutes,seconds}
// };

// export default useClock;