"use client";
import { PicturesType } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  const params = new URLSearchParams(searchParams);
  params.set("imageDate", pictureData.date);
  params.set("title", pictureData.title);
  params.set("hdurl", pictureData.hdurl);

  return (
    <>
      {pictureData.media_type === "image" ? (
        <Link
          className={stlyes.calendarDayBox}
          href={`/detail?${params.toString()}`}
          style={index === 0 ? { gridColumnStart: numberOfFirstDay + 1 } : {}}
          key={pictureData.title}
        >
          <span className={stlyes.calendarDayNumber}>{index + 1}</span>
          <Image src={pictureData.url} alt="nasa-day-image" fill />
        </Link>
      ) : (
        <div className={stlyes.calendarDayNoImage}>
          <span className={stlyes.calendarDayNumber}>{index + 1}</span>
          No image available
        </div>
      )}
    </>
  );
}
