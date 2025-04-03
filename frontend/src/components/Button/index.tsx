"use client";
import styles from "./index.module.css";

interface BtnProp {
  content: string;
  size: "small" | "large";
  action: () => void;
}

const Button = ({ content, size, action }: BtnProp) => {
  return (
    <div className={`${styles.container} ${styles[size]}`} onClick={action}>
      {content}
    </div>
  );
};

export default Button;
