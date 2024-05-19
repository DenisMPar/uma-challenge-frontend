import {
  differenceInMonths,
  format,
  getDate,
  isSameMonth,
  lastDayOfMonth,
  parse,
  parseISO,
  startOfMonth,
  subDays,
} from "date-fns";

export function generateMonthsPaths(numberOfMonths?: number) {
  const currentDate = new Date();
  const endDate = parse("1995-06", "yyyy-MM", new Date());
  const monthsDifference = numberOfMonths
    ? numberOfMonths
    : differenceInMonths(currentDate, endDate);
  const monthsArray = [];

  for (let i = 0; i < monthsDifference; i++) {
    const firstDayOfCurrentMonth = startOfMonth(currentDate);
    const lastDayOfPreviousMonth = subDays(firstDayOfCurrentMonth, 1);
    const formattedDate = format(lastDayOfPreviousMonth, "yyyy-MM");

    monthsArray.push(formattedDate);
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  console.log({ monthsArray });

  return monthsArray;
}

export function getStartAndEndDates(month: string) {
  const dateObject = parseISO(month);
  const firstDayOfMonth = startOfMonth(dateObject);
  const numberOfFirstDay = getDate(firstDayOfMonth);
  const lastPosibleMonth = parse("1995-06", "yyyy-MM", new Date());
  const isLastPosibleMonth = isSameMonth(dateObject, lastPosibleMonth);
  const lastPosibleMonthDateStart = parse(
    "1995-06-16",
    "yyyy-MM-dd",
    new Date()
  );
  const startDate = isLastPosibleMonth
    ? format(lastPosibleMonthDateStart, "yyyy-MM-dd")
    : format(firstDayOfMonth, "yyyy-MM-dd");
  const endDate = isSameMonth(new Date(), dateObject)
    ? format(new Date(), "yyyy-MM-dd")
    : format(lastDayOfMonth(dateObject), "yyyy-MM-dd");
  return { startDate, endDate, numberOfFirstDay };
}
