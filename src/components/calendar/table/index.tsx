import { getStartAndEndDates } from "@/app/lib/date";
import { NaseImageComponent } from "../image";
import { getPicturesData, PicturesType } from "@/app/lib/api";

export async function CalendarTable({ monthDate }: { monthDate: string }) {
  const { startDate, endDate, numberOfFirstDay } =
    getStartAndEndDates(monthDate);

  const picturesData = await getPicturesData(startDate, endDate);

  return (
    <>
      {picturesData?.map((picture: PicturesType, index: number) => {
        return (
          <NaseImageComponent
            numberOfFirstDay={numberOfFirstDay}
            key={picture.title}
            pictureData={picture}
            index={index}
          />
        );
      })}
    </>
  );
}
