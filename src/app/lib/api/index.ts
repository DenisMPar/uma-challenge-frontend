import { UUID } from "crypto";
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3080/api/v1"
    : process.env.NEXT_PUBLIC_API_BASE_URL;
export interface PicturesType {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
export const getPicturesData = async (
  startDate: string,
  endDate: string
): Promise<PicturesType[]> => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  return data;
};
export interface commentsType {
  id: string;
  text: string;
  NasaImageId: UUID;
}
export const getImageComments = async (
  imageDate: string
): Promise<commentsType[] | false> => {
  try {
    const res = await fetch(`${API_BASE_URL}/comments/${imageDate}`, {
      cache: "no-store",
      next: { tags: ["comments"] },
    });
    const resJson = await res.json();
    return resJson.comments;
  } catch (error) {
    return false;
  }
};
