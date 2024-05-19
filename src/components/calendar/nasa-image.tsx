"use client";
import { PicturesType } from "@/app/lib/api";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import stlyes from "./styles.module.css";
export function NaseImageComponent({
  pictureData,
  index,
  numberOfFirstDay,
}: {
  pictureData: PicturesType;
  index: number;
  numberOfFirstDay: number;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  function handleClick() {
    const params = new URLSearchParams(searchParams);
    params.set("imageDate", pictureData.date);
    params.set("title", pictureData.title);
    params.set("hdurl", pictureData.hdurl);
    params.set("modal", "true");

    replace(`?${params.toString()}`);
  }
  return (
    <>
      <div
        className={stlyes.calendarDayBox}
        style={index === 0 ? { gridColumnStart: numberOfFirstDay + 1 } : {}}
        key={pictureData.title}
        onClick={handleClick}
      >
        <span className={stlyes.calendarDayNumber}>{index + 1}</span>
        {pictureData.media_type === "image" && (
          <Image src={pictureData.url} alt="nasa-day-image" fill />
        )}
      </div>
    </>
  );
}
