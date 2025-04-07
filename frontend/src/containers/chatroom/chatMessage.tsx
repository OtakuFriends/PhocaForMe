"use client";
import styles from "./index.module.css";
import { Pin } from "#/svgs";
import { useEffect, useRef, useState } from "react";

interface Props {
  roomId: number;
}

interface Chat {
  id: number;
}

const ChatMessage = ({ roomId }: Props) => {
  const [chatting, setChatting] = useState<Chat[]>([]);
  const sendMessageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(roomId + " 방의 채팅내역 가져오기...");
    setChatting([]);
  }, [roomId]);

  useEffect(() => {
    if (sendMessageBoxRef.current) {
      window.scrollTo({ top: sendMessageBoxRef.current.scrollHeight });
    }
  }, [chatting]);

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
