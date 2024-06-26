import Image from "next/image";
import { CommentsSection } from "./comments";
import styles from "./styles.module.css";
import { DetailSearchParams } from "@/app/detail/page";
import Link from "next/link";

export function ImageDetail({ imageData }: { imageData: DetailSearchParams }) {
  return (
    <div className={styles.imageDetailRoot}>
      <Link href="/" className={styles.backButton}>
        Back
      </Link>
      <div className={styles.imageDetailContainer}>
        <div className={styles.imageTextContainer}>
          <p className={styles.detailText}>{imageData.title}</p>
          <p className={styles.detailText}>{imageData.imageDate}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority
            className={styles.image}
            src={imageData.hdurl}
            alt="nasa-image"
            fill
          />
        </div>
      </div>
      <CommentsSection imageDate={imageData.imageDate} />
    </div>
  );
}
