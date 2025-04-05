"use client";
import styles from "./index.module.css";
import { Pin } from "#/svgs";

const ChatMessage = () => {
  return (
    <div className={styles.message}>
      <div className={styles.noticeBox}>
        <Pin className={styles.noticeIcon} />
        <b>필독</b> 거래가 처음이신가요? <a href="/help">인증가이드</a>를 읽고
        믿을 수 있는 거래 하세요!
      </div>
    </div>
  );
};

export default ChatMessage;
