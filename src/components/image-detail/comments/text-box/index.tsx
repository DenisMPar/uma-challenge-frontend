"use client";
import { createComment } from "@/app/lib/actions";
import { PrimaryButton } from "@/ui/buttons";
import { Spinner } from "@/ui/spinner";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { SubmitButton } from "./button";

export function CommentTextBox({ imageDate }: { imageDate: string }) {
  const ref = useRef<null | HTMLFormElement>(null);

  const [error, setError] = useState<boolean>(false);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref?.current?.reset();
        const { success } = await createComment(formData);
        if (!success) {
          setError(true);
        } else {
          setError(false);
        }
      }}
      className={styles.commentTextBox}
    >
      <textarea
        placeholder="Add a comment"
        className={styles.commentInput}
        name="commentText"
      />
      <input type="hidden" name="imageDate" value={imageDate} />
      <SubmitButton />
      {error && (
        <span className={styles.spanError}>
          Something went wrong. Please try again.
        </span>
      )}
    </form>
  );
}
