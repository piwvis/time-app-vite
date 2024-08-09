"use client";

import { useState, useEffect } from "react";

const calculateTimeLeft = (targetTimestamp) => {
  const difference = targetTimestamp * 1000 - Date.now();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetTimestamp }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTimestamp));
  const [isTimeStart, setIsTimeStart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp));
      setIsTimeStart(true);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      {isTimeStart ? (
        <div className="flex flex-row justify-center space-x-2 px-2 pb-4 md:pb-0">
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.days).padStart(2, "0")}m
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.days).padStart(2, "0")}d
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.hours).padStart(2, "0")}m
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.minutes).padStart(2, "0")}h
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </h1>
        </div>
      ) : (
        <div className="flex flex-row justify-center space-x-2 px-2 pb-4 md:pb-0">
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.days).padStart(2, "0")}m
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.days).padStart(2, "0")}d
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.hours).padStart(2, "0")}m
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.minutes).padStart(2, "0")}h
          </h1>
          <h1 className="rounded-md border-2 border-[#181818] bg-[#010304] p-1 font-primary text-base text-white">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </h1>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
