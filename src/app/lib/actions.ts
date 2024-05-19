"use server";

import { revalidateTag } from "next/cache";

export async function createComment(
  formData: FormData
): Promise<{ success: boolean }> {
  const commentText = await formData.get("commentText");
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/comments/${formData.get("imageDate")}`,
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
