"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Post from "./Post";
import { Setting } from "#/svgs";
import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();
  const goToSetting = () => {
    router.push("/mypage/setting");
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.topContainer}>
          <Title size="large">마이페이지</Title>
          <div className={styles.settingSvg} onClick={goToSetting}>
            <Setting />
          </div>
        </div>
        <div className={styles.bubble}>
          <div className={styles.bubbleTail}></div>
          <div className={styles.bubbleText}>
            나의 최애와 갈망포카를 설정해보세요!
          </div>
        </div>
      </div>
      <Post type="recent" />
      <Post type="mypost" />
    </div>
  );
};

export default MyPage;
