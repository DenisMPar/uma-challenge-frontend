import { generateMonthsPaths } from "@/app/lib/date";
import { ImageDetail } from "@/components/image-detail";
import { LargeImageSkeleton } from "@/ui/skeletons/calendar";
import { format, parseISO } from "date-fns";
import { Suspense } from "react";
export async function generateStaticParams() {
  const months = generateMonthsPaths(12);
  return months.map((month) => ({
    month: format(parseISO(month), "yyyy-MM"),
  }));
}
export interface DetailSearchParams {
  imageDate: string;
  hdurl: string;
  title: string;
}
export default function Page({
  searchParams,
}: {
  params: { month: string };
  searchParams: {
    imageDate: string;
    hdurl: string;
    title: string;
  };
}) {
  return (
    <>
      <Suspense key={searchParams.imageDate} fallback={<LargeImageSkeleton />}>
        <ImageDetail imageData={searchParams} />
      </Suspense>
    </>
  );
}
