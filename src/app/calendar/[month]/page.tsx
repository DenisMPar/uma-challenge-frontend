import { generateMonthsPaths } from "@/app/lib/date";
import { CalendarComponent } from "@/components/calendar";
import { format, parseISO } from "date-fns";
export async function generateStaticParams() {
  //se deberian poner todos los posibes meses pero lo reduje a 8 para evitar tantas llamadas a la api
  const months = generateMonthsPaths(8);
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
