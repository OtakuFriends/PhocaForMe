"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import List from "@/components/ChatList";

interface ChatRoom {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visitorId: string;
  latestChat: number;
  ownerLatestChat: number;
  visitorLatestChat: number;
  createdAt: Date;
  readStatus: boolean;
  isDelete: boolean;
}

const ChatList = () => {
  const [chatlist, setChatlist] = useState<ChatRoom[]>([]);

  useEffect(() => {
    setChatlist([
      {
        id: 1,
        boardId: 1,
        boardtitle: "도영 포토카드 마크로 구해요",
        ownerId: "1",
        visitorId: "방문자2",
        latestChat: 1,
        ownerLatestChat: 0,
        visitorLatestChat: 1,
        createdAt: new Date(),
        readStatus: false,
        isDelete: false,
      },
      {
        id: 2,
        boardId: 1,
        boardtitle: "도영 포토카드 마크로 구해요",
        ownerId: "1",
        visitorId: "방문자3",
        latestChat: 2,
        ownerLatestChat: 3,
        visitorLatestChat: 2,
        createdAt: new Date(),
        readStatus: true,
        isDelete: false,
      },
    ]);
  }, []);

  return (
    <div id={styles.container}>
      <Title size="large">채팅 목록</Title>
      <List chatList={chatlist} />
    </div>
  );
};

export default ChatList;
