"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Post from "./Post";
import { Setting } from "#/svgs";

const MyPage = () => {
  // const loginUser = "아궁빵";
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.topContainer}>
          <Title size="large">마이페이지</Title>
          <div className={styles.settingSvg}>
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
      {/* <Nickname loginUser={loginUser} />
      <Bias />
      <WishCard /> */}
      <Post type="recent" />
      <Post type="mypost" />
    </div>
  );
};

export default MyPage;
