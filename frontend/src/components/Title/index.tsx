import "@/styles/globals.css";
import styles from "./index.module.css";

interface Props {
  size: "large" | "medium" | "small";
  children: React.ReactNode;
  id?: string;
  font?: string;
  underline?: boolean;
}

export default function Title({ size, children, id, font, underline }: Props) {
  return (
    <div
      className={`${styles.container} ${
        size === "large"
          ? styles.titleLarge
          : size === "medium"
          ? styles.titleMedium
          : styles.titleSmall
      } ${font === "normal" ? styles.normal : ""}`}
      {...(id ? { id } : {})}
    >
      {children}
      {underline ? <div className={styles.underline} /> : null}
    </div>
  );
}
