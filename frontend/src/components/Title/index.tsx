import "@/styles/globals.css";
import styles from "./index.module.css";

interface Props {
  size: "large" | "medium" | "small";
  children: React.ReactNode;
  id?: string;
  font?: string;
}

export default function Title({ size, children, id, font }: Props) {
  return (
    <div
      className={`${
        size === "large"
          ? styles.titleLarge
          : size === "medium"
          ? styles.titleMedium
          : styles.titleSmall
      } ${font === "normal" ? styles.normal : ""}`}
      {...(id ? { id } : {})}
    >
      {children}
    </div>
  );
}
