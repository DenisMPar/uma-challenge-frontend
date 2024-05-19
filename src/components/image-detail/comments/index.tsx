import { getImageComments } from "@/app/lib/api";
import styles from "./styles.module.css";
import { CommentTextBox } from "./text-box";
export async function CommentsSection({ imageDate }: { imageDate: string }) {
  const comments = await getImageComments("2024-05-18");

  return (
    <div className={styles.CommentsRoot}>
      <CommentTextBox imageDate={imageDate} />
      {comments ? (
        <div className={styles.CommentsContainer}>
          {comments.map((comment) => (
            <p key={comment.id} className={styles.CommentsBox}>
              {comment.text}
            </p>
          ))}
        </div>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}
