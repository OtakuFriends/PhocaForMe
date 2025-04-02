"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const Ad = () => {
  const router = useRouter();
  const goToAd = () => {};

  return (
    <div id={styles.container}>
      <div id={styles.adArea} onClick={goToAd}></div>
    </div>
  );
};

export default Ad;
