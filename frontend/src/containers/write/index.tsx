"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";
import Photo from "./Photo";
import Text from "./Text";
import Single from "./Single";
import Double from "./Double";

const Write = () => {
  return (
    <div id={styles.container}>
      <Title size="large">게시글 작성하기</Title>
      <Photo />
      <Text type="title" />
      <Single title="그룹명" />
      <Double title={["보유한 멤버", "찾는 멤버"]} />
      <Single title="포토카드 종류" />
      <Text type="content" />
    </div>
  );
};

export default Write;
