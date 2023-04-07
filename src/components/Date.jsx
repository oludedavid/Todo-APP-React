import React from "react";
import { useState } from "react";

export default function Date() {
  const currentDate = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fullYear = currentDate.getFullYear();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDayOfWeek = dayNames[currentDate.getDay()];
  const currentDateOfTheMonth = currentDate.getDate();

  let todaysDate;

  if (
    currentDateOfTheMonth === 1 ||
    currentDateOfTheMonth === 21 ||
    currentDateOfTheMonth === 30
  ) {
    todaysDate = `Today's Date is ${currentDayOfWeek}, ${currentDateOfTheMonth}st of ${currentMonth} ${fullYear}`;
  } else if (currentDateOfTheMonth === 2 || currentDateOfTheMonth === 22) {
    todaysDate = `Today's Date is ${currentDayOfWeek}, ${currentDateOfTheMonth}nd of ${currentMonth} ${fullYear}`;
  } else if (currentDateOfTheMonth === 3 || currentDateOfTheMonth === 23) {
    todaysDate = `Today's Date is ${currentDayOfWeek}, ${currentDateOfTheMonth}rd of ${currentMonth} ${fullYear}`;
  } else {
    todaysDate = `Today's Date is ${currentDayOfWeek}, ${currentDateOfTheMonth}th of ${currentMonth} ${fullYear}`;
  }

  console.log(todaysDate);
  //   const [date, setDate] = useState(new Date());
  //   const [time, setTime] = useState(new Date());

  return (
    <div>
      <h1>{todaysDate}</h1>
      {/* <h1>{date.toLocaleDateString()}</h1>
      <h1>{time.toLocaleTimeString()}</h1> */}
    </div>
  );
}
