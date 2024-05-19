import { CalendarTableSkeleton } from "@/ui/skeletons/calendar";
import { getMonthName } from "@/utilities/months";
import { getMonth, getYear, parseISO } from "date-fns";
import { Suspense } from "react";
import { CalendarNavigate } from "./navigate";

import styles from "./styles.module.css";
import { CalendarTable } from "./table";

export async function CalendarComponent({ monthDate }: { monthDate: string }) {
  const dateObject = parseISO(monthDate);
  const year = getYear(dateObject);
  const month = getMonth(dateObject);
  const monthName = getMonthName(month + 1);

  return (
    <div className={styles.calendarRoot}>
      <header className={styles.calendarHeader}>
        <h1>{year}</h1>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid var(--border-medium-blue)",
            margin: "0",
          }}
        />
        <div className={styles.calendaryMonthContainer}>
          <h2>{monthName}</h2>
          <CalendarNavigate monthDate={monthDate} />
        </div>
      </header>
      <div className={styles.calendarDaysContainer}>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Sun.</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Mon..</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Tue.</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Wed.</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Thurs.</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Fry.</h4>
        </div>
        <div className={styles.calendarDayNameContainer}>
          <h4 className={styles.calendarDayName}>Sat.</h4>
        </div>
        <Suspense fallback={<CalendarTableSkeleton />}>
          <CalendarTable monthDate={monthDate} />
        </Suspense>
      </div>
    </div>
  );
}
