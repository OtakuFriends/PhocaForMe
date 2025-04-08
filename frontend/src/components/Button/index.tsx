"use client";
import styles from "./index.module.css";

interface BtnProp {
  content: string;
  size: "small" | "large";
  action: () => void;
  className?: string;
}

const Button = ({ content, size, action, className }: BtnProp) => {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${
        className ? styles[className] : ""
      }`}
      onClick={action}
    >
      {content}
    </div>
  );
};

export default Button;
