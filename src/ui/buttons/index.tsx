import styles from "./styled.module.css";
export function PrimaryButton({
  children,
  onClick,
  disabled,
  className,
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.primaryButton + " " + className}
    >
      {children}
    </button>
  );
}
