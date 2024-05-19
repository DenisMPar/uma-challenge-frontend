import { UUID } from "crypto";

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
    { cache: "no-store" }
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
    console.log("send req");

    const res = await fetch(
      `http://localhost:3000/api/v1/comments/${imageDate}`,
      { cache: "no-store", next: { tags: ["comments"] } }
    );
    const resJson = await res.json();
    return resJson.comments;
  } catch (error) {
    console.log(error);

    return false;
  }
};
export function postNewComment(commentText: string, imageDate: string) {
  return fetch(`http://localhost:3000/api/v1/comments/${imageDate}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: commentText }),
  });
}
