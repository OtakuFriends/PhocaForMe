"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

const WishCard = () => {
  return (
    <div className={styles.gradient}>
      <div className={styles.wishcard}>
        <Title size="medium">갈망포카 설정</Title>
      </div>
    </div>
  );
};

export default WishCard;
