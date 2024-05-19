"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";
function Modal({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <Link href={pathname}>
            <button className={styles.closeButton}>&#10006;</button>
          </Link>
          <div className={styles.modalContent}>{children}</div>
        </div>
      )}
    </>
  );
}

export default Modal;
