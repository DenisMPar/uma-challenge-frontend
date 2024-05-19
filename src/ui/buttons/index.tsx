import styles from "./styled.module.css";
export function PrimaryButton({
  children,
  onClick,
  disabled,
  variant,
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: "small" | "medium" | "large";
  type?: "submit" | "reset" | "button";
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.primaryButton + " " + styles[variant]}
    >
      {children}
    </button>
  );
}
