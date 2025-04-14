"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

interface Props {
  type: string;
}

const Post = ({ type }: Props) => {
  return (
    <div className={styles.post}>
      <Title size="medium">
        {type == "recent" ? "최근 본 게시글" : "나의 게시글"}
      </Title>
    </div>
  );
};

export default Post;
