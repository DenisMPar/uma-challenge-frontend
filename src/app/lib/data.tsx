export interface PicturesType {
  copyright: string;
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
    `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`
  );
  const data = await response.json();
  return data;
};
