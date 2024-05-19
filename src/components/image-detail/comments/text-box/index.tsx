"use client";
import { createComment } from "@/app/lib/actions";
import { PrimaryButton } from "@/ui/buttons";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { Spinner } from "@/ui/spinner";

export function CommentTextBox({ imageDate }: { imageDate: string }) {
  const ref = useRef<null | HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        setIsLoading(true);
        const { success } = await createComment(formData);
        ref?.current?.reset();
        setIsLoading(false);

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
      <PrimaryButton type="submit" className={styles.commentButton}>
        {isLoading ? <Spinner /> : "Comment"}
      </PrimaryButton>
      {error && (
        <span className={styles.spanError}>
          Something went wrong. Please try again.
        </span>
      )}
    </form>
  );
}