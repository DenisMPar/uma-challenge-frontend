import { CalendarComponent } from "@/components/calendar";
import { format, startOfMonth } from "date-fns";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    startDate?: string;
    endDate?: string;
  };
}) {
  const startDate =
    searchParams?.startDate || format(startOfMonth(new Date()), "yyyy-MM-dd");
  const endDate = searchParams?.endDate || format(new Date(), "yyyy-MM-dd");
  return (
    <main>
      <CalendarComponent startDate={startDate} endDate={endDate} />
    </main>
  );
}
