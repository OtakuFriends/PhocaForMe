"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface Chat {
  id: number;
  roomId: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
  senderId: string;
  imgCode: string;
}

interface Props {
  chat: Chat;
  loginUser: string;
}

const Bubble = ({ chat, loginUser }: Props) => {
  const [isMe, setIsMe] = useState<boolean>(false);
  useEffect(() => {
    if (chat.senderId == loginUser) {
      setIsMe(true);
    }
  }, []);

  return (
    <div
      className={`${styles.container} ${
        isMe ? styles.meContainer : styles.youContainer
      }`}
    >
      {isMe ? (
        <div className={styles.date}>
          {chat.createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
      ) : null}
      <div
        className={`${styles.textContainer} ${isMe ? styles.me : styles.you}`}
      >
        {chat.message}
      </div>
      {!isMe ? (
        <div className={styles.date}>
          {chat.createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Bubble;
