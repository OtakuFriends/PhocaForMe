"use client";
import { Arrow } from "#/svgs";
import { useRouter } from "next/navigation";
import Bias from "./Bias";
import Nickname from "./Nickname";
import WishCard from "./WishCard";
import styles from "./index.module.css";
import Title from "@/components/Title";

const Setting = () => {
  const loginUser = "아궁빵";
  const router = useRouter();
  const goToMypage = () => {
    router.push("/mypage");
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.icon} onClick={goToMypage}>
          <Arrow />
        </div>
        <Title size="large" font="normal">
          설정
        </Title>
        <div className={styles.icon}></div>
      </div>
      <Nickname loginUser={loginUser} />
      <Bias />
      <WishCard />
    </div>
  );
};

export default Setting;
