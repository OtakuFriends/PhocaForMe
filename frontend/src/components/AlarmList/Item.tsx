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
      <div className={styles.top}>
        <div className={styles.content}>
          {!readStatus ? <Circle /> : <Check />}
          <div className={styles.title}>
            {type === "Chatting" ? "채팅알림" : "갈망포카"}
          </div>
        </div>
        <div className={styles.subcontent}>
          <div className={styles.date}>{createdAt?.toLocaleDateString()}</div>
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
      <div className={styles.bottom}>
        <div className={styles.subtitle}>
          {type === "Chatting"
            ? `${userId} 님이 채팅을 보냈습니다.`
            : "지금 당신의 갈망포카가 올라왔어요!"}
        </div>
      </div>
    </div>
  );
};

export default Item;
