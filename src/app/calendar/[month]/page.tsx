import { generateMonthsPaths } from "@/app/lib/date";
import { CalendarComponent } from "@/components/calendar";
import { ImageDetail } from "@/components/image-detail";
import { format, parseISO } from "date-fns";
export async function generateStaticParams() {
  const months = generateMonthsPaths();
  return months.map((month) => ({
    month: format(parseISO(month), "yyyy-MM"),
  }));
}
export interface CalendarSearchParams {
  modal: string;
  imageDate: string;
  hdurl: string;
  title: string;
}
export default function Page({
  params: { month },
  searchParams,
}: {
  params: { month: string; modal: string };
  searchParams: {
    modal: string;
    imageDate: string;
    hdurl: string;
    title: string;
  };
}) {
  return (
    <main>
      <CalendarComponent monthDate={month} modal={searchParams.modal} />
      <ImageDetail imageData={searchParams} />
    </main>
  );
}
