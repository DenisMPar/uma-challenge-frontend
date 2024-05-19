import { generateMonthsPaths } from "@/app/lib/date";
import { CalendarComponent } from "@/components/calendar";
import { format, parseISO } from "date-fns";
export async function generateStaticParams() {
  const months = generateMonthsPaths(12);
  return months.map((month) => ({
    month: format(parseISO(month), "yyyy-MM"),
  }));
}

export default function Page({
  params: { month },
}: {
  params: { month: string };
}) {
  return (
    <main>
      <CalendarComponent monthDate={month} />
    </main>
  );
}
