"use client";
import styles from "./index.module.css";
import Nickname from "./Nickname";
import Bias from "./Bias";
import WishCard from "./WishCard";
import Post from "./Post";

const MyPage = () => {
  const loginUser = "아궁빵";
  return (
    <div className={styles.container}>
      <Nickname loginUser={loginUser} />
      <Bias />
      <WishCard />
      <Post type="recent" />
      <Post type="mypost" />
    </div>
  );
};

export default MyPage;
