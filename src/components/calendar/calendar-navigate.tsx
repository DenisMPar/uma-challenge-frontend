"use client";

import { PrimaryButton } from "@/ui/buttons";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
  parseISO,
  isSameMonth,
  parse,
} from "date-fns";
import styles from "./styles.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function CalendarNavigate({ monthDate }: { monthDate: string }) {
  const router = useRouter();
  const dateObject = parseISO(monthDate);
  const isActualMonth = isSameMonth(dateObject, new Date());
  const lastPosibleMonth = parse("1995-06", "yyyy-MM", new Date());
  const isLastPosibleMonth = isSameMonth(dateObject, lastPosibleMonth);

  function handleClick(actionType: "previous" | "next") {
    if (actionType === "previous") {
      return (
        !isLastPosibleMonth &&
        router.push(`/calendar/${format(subMonths(dateObject, 1), "yyyy-MM")}`)
      );
    }
    return (
      !isActualMonth &&
      router.push(`/calendar/${format(addMonths(dateObject, 1), "yyyy-MM")}`)
    );
  }

  return (
    <div className={styles.navigateRoot}>
      <PrimaryButton
        disabled={isLastPosibleMonth}
        onClick={() => handleClick("previous")}
      >
        {"<"}
      </PrimaryButton>
      <PrimaryButton
        disabled={isActualMonth}
        onClick={() => handleClick("next")}
      >
        {">"}
      </PrimaryButton>
    </div>
  );
}
