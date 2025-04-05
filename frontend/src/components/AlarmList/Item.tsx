"use client";
import { Check, Circle, Close } from "#/svgs";
import styles from "./index.module.css";

interface Alarm {
  id: number;
  userId: string; // 알림 주체
  title: string;
  content: string;
  createdAt: Date;
  readStatus: boolean;
  deleteStatus: boolean;
  type: "Chatting" | "Article";
  articleId: number;
}

interface Props extends Alarm {
  deleteAlarm: (id: number) => void;
}

const Item = ({
  id,
  userId,
  readStatus,
  type,
  createdAt,
  deleteAlarm,
}: Props) => {
  return (
    <div
      className={`${styles.itemContainer} ${
        readStatus ? styles.read : styles.unread
      }`}
    >
      <div className={styles.left}>
        {!readStatus ? <Circle /> : <Check />}
        <div className={styles.content}>
          <div className={styles.title}>
            {type === "Chatting" ? "채팅알림" : "갈망포카"}
          </div>
          <div className={styles.subtitle}>
            {type === "Chatting"
              ? `${userId} 님이 채팅을 보냈습니다.`
              : "지금 당신의 갈망포카가 올라왔어요!"}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div>{createdAt?.toLocaleDateString()}</div>
        <div
          className={styles.close}
          onClick={(e) => {
            e.stopPropagation();
            deleteAlarm(id);
          }}
        >
          <Close />
        </div>
      </div>
    </div>
  );
};

export default Item;
