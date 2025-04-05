"use client";
import { Kanban } from "#/svgs";
import Image from "next/image";
import styles from "./index.module.css";

type ChatInfo = {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visiterId: string;
};

interface Props {
  info?: ChatInfo;
}

const ChatTop = ({ info }: Props) => {
  return (
    <div className={styles.top}>
      <div className={styles.topContainer}>
        <div className={styles.topTitleContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="게시글 썸네일"
              fill
              sizes="10vw"
              style={{ objectFit: "cover" }}
              src={
                "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2"
              }
            />
          </div>
          <div className={styles.topTitle}>{info?.visiterId}</div>
        </div>
        <div className={styles.kanban}>
          <Kanban />
        </div>
      </div>
      <div className={styles.topSubtitle}>{info?.boardtitle}</div>
      <div id={styles.hr}></div>
    </div>
  );
};

export default ChatTop;
