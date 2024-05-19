import { NasaLogoSvg } from "@/ui/icons/nasa-logo";
import styles from "./styles.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <NasaLogoSvg className={styles.headerLogo} />
    </header>
  );
}
