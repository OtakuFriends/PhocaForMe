"use client";
import Bias from "./Bias";
import Nickname from "./Nickname";
import WishCard from "./WishCard";
import styles from "./index.module.css";

const Setting = () => {
  const loginUser = "아궁빵";
  return (
    <div className={styles.container}>
      <Nickname loginUser={loginUser} />
      <Bias />
      <WishCard />
    </div>
  );
};

export default Setting;
