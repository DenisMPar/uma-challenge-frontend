import stlyes from "./styles.module.css";
import { Suspense, useEffect, useState } from "react";
import {
  endOfMonth,
  startOfMonth,
  format,
  parseISO,
  getYear,
  getMonth,
} from "date-fns";
import { CalendarTable } from "./calendar-table";
import { getMonthName } from "@/utilities/months";
import { CalendarTableSkeleton } from "@/ui/skeletons/calendar";
import { CalendarNavigate } from "./calendar-navigate";

export function CalendarComponent({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const dateObject = parseISO(startDate);
  const year = getYear(dateObject);
  const month = getMonth(dateObject);
  const monthName = getMonthName(month);
  return (
    <div className={stlyes.calendarRoot}>
      <header className={stlyes.calendarHeader}>
        <h1>{year}</h1>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid black",
            margin: "0",
          }}
        />
        <h2>{monthName}</h2>
      </header>
      <div className={stlyes.calendarDaysContainer}>
        <h4 className={stlyes.calendarDayName}>sun.</h4>
        <h4 className={stlyes.calendarDayName}>mon.</h4>
        <h4 className={stlyes.calendarDayName}>tues.</h4>
        <h4 className={stlyes.calendarDayName}>wed.</h4>
        <h4 className={stlyes.calendarDayName}>trurs.</h4>
        <h4 className={stlyes.calendarDayName}>fri.</h4>
        <h4 className={stlyes.calendarDayName}>sat.</h4>
        <Suspense fallback={<CalendarTableSkeleton />}>
          <CalendarTable startDate={startDate} endDate={endDate} />
        </Suspense>
      </div>
      <CalendarNavigate />
    </div>
  );
}
