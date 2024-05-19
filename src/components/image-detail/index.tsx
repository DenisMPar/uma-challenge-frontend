import { PicturesType } from "@/app/lib/api";
import Image from "next/image";
import styles from "./styles.module.css";
import { CommentsSection } from "./comments";
import { useImageData } from "@/hooks";
import { CalendarSearchParams } from "@/app/calendar/[month]/page";
import Modal from "../modal";

export function ImageDetail({
  imageData,
}: {
  imageData: CalendarSearchParams;
}) {
  return (
    <Modal>
      <div className={styles.imageDetailContainer}>
        <div className={styles.imageTextContainer}>
          <p className={styles.detailText}>{imageData.title}</p>
          <p className={styles.detailText}>{imageData.imageDate}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={imageData.hdurl}
            alt="nasa-image"
            fill
          />
        </div>
      </div>
      <CommentsSection imageDate={imageData.imageDate} />
    </Modal>
  );
}
