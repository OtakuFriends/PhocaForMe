"use client";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";

interface ChatRoom {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visiterId: string;
  latestChat: number;
  ownerLatestChat: number;
  visitorLatestChat: number;
  createdAt: Date;
  readStatus: boolean;
  isDelete: boolean;
}

const Item = ({
  id,
  visiterId,
  latestChat,
  createdAt,
  readStatus,
}: ChatRoom) => {
  const router = useRouter();
  const goToChatroom = (id: number) => {
    router.push("/chatroom/" + id);
  };
  return (
    <div
      onClick={() => goToChatroom(id)}
      className={`${styles.itemContainer} ${
        readStatus ? styles.read : styles.unread
      }`}
    >
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          alt="게시글 썸네일"
          fill
          sizes="50vw"
          style={{ objectFit: "cover" }}
          src={
            "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2"
          }
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.top}>
          <div className={styles.title}>{visiterId}</div>
          <div className={styles.date}>{createdAt?.toLocaleDateString()}</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.subtitle}>id {latestChat} 메시지</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
