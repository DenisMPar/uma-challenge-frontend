"use client";

import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
  parseISO,
} from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CalendarNavigate() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  function handleClick(actionType: {
    type: "month" | "year";
    action: "next" | "previous";
  }) {
    let newStartDate = "";
    let newEndDate = "";
    const startDate = searchParams.get("start_date");
    const currentDate = startDate ? new Date(parseISO(startDate)) : new Date();
    if (actionType.type === "month") {
      if (actionType.action === "next") {
        const lastDayOfCurrentMonth = endOfMonth(currentDate);
        const nextMonthStart = addDays(lastDayOfCurrentMonth, 1);
        const nextMonthEnd = endOfMonth(nextMonthStart);
        newStartDate = format(nextMonthStart, "yyyy-MM-dd");
        newEndDate = format(nextMonthEnd, "yyyy-MM-dd");
      }
      if (actionType.action === "previous") {
        const previousMonthEnd = subDays(startOfMonth(currentDate), 1);
        const previousMonthStart = startOfMonth(previousMonthEnd);
        newStartDate = format(previousMonthStart, "yyyy-MM-dd");
        newEndDate = format(previousMonthEnd, "yyyy-MM-dd");
      }
    }

    const params = new URLSearchParams(searchParams);
    params.set("start_date", newStartDate);
    params.set("end_date", newEndDate);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <button
        onClick={() => handleClick({ type: "month", action: "previous" })}
      >
        {"<"}
      </button>
      <button onClick={() => handleClick({ type: "month", action: "next" })}>
        {">"}
      </button>
    </div>
  );
}
