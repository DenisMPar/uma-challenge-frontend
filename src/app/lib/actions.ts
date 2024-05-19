"use server";

import { revalidateTag } from "next/cache";
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3080/api/v1"
    : process.env.NEXT_PUBLIC_API_BASE_URL;
export async function createComment(
  formData: FormData
): Promise<{ success: boolean }> {
  const commentText = await formData.get("commentText");
  try {
    const res = await fetch(
      `${API_BASE_URL}/comments/${formData.get("imageDate")}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: commentText }),
      }
    );
    const response = await res.json();
    revalidateTag("comments");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
