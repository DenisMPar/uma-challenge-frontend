import { getPicturesData } from "@/app/lib/data";
import { getDate, parseISO, startOfMonth } from "date-fns";
import Image from "next/image";
import stlyes from "./styles.module.css";
export async function CalendarTable({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const dateObject = parseISO(startDate);
  const firstDayOfMonth = startOfMonth(dateObject);
  const numberOfFirstDay = getDate(firstDayOfMonth);
  const picturesData = await getPicturesData(startDate, endDate);

  return (
    <>
      {picturesData?.map((picture, index) => {
        return (
          <div
            className={stlyes.calendarDayBox}
            style={index === 0 ? { gridColumnStart: numberOfFirstDay + 1 } : {}}
            key={picture.title}
          >
            <span className={stlyes.calendarDayNumber}>{index + 1}</span>
            {picture.media_type === "image" && (
              <Image src={picture.url} alt="nasa-day-image" fill />
            )}
            {picture.media_type === "video" && (
              <video
                src={picture.url}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
