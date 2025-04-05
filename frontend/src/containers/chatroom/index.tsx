"use client";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";

// import { Container } from "@mui/material";
// import { PushPinRounded } from "@mui/icons-material";

// import { sendChat, initChat } from "@/store/chat";
// import { timeFormat } from "@/utils/timeFormat";
// import { getChatList } from "@/api/chat";
// import { getNickname } from "@/api/nickname";

import ChatTop from "./chatTop";
import ChatSend from "./chatSend";
import { Pin } from "#/svgs";
import { useRouter } from "next/navigation";
import ChatMessage from "./chatMessage";

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

interface TopInfo {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visiterId: string;
}

interface Chat {
  id: number;
}

interface Props {
  roomId: number;
}

const ChatRoom = ({ roomId }: Props) => {
  const router = useRouter();
  const [chatroom, setChatroom] = useState<ChatRoom>();
  const [topInfo, setTopInfo] = useState<TopInfo>();
  const [loading, setLoading] = useState(false);

  const loginUser = "1";
  const [chatting, setChatting] = useState<Chat[]>([]);

  const sendMessageBoxRef = useRef<HTMLDivElement>(null);

  const updateMessages = (receive) => {
    // if (receive && !receive.type) {
    //   const newMessage = {
    //     chatRoomId: receive.chatRoomId,
    //     createdAt: new Date().toISOString(),
    //     imgCode: receive.imgCode,
    //     message: receive.message,
    //     userEmail: receive.userEmail,
    //   };
    //   if (newMessage.message || newMessage.imgCode !== null) {
    //     dispatch(sendChat(newMessage));
    //   }
    // }
    setLoading(false);
  };

  useEffect(() => {
    // 잘못된 접근 돌려보내기
    // 내가 visitor 인지 owner 인지 체크
  }, []);

  useEffect(() => {
    // 채팅 히스토리 가져오기
  }, []);

  useEffect(() => {
    if (sendMessageBoxRef.current) {
      window.scrollTo({ top: sendMessageBoxRef.current.scrollHeight });
    }
  }, [chatting]);

  useEffect(() => {
    setChatroom({
      id: 1,
      boardId: 1,
      boardtitle: "도영 포토카드 마크로 구해요",
      ownerId: "1",
      visiterId: "방문자2",
      latestChat: 1,
      ownerLatestChat: 0,
      visitorLatestChat: 1,
      createdAt: new Date(),
      readStatus: false,
      isDelete: false,
    });

    setTopInfo({
      id: 1,
      boardId: 1,
      boardtitle: "도영 포토카드 마크로 구해요",
      ownerId: "1",
      visiterId: "방문자2",
    });
  }, []);

  return (
    <div className={styles.container}>
      <ChatTop info={topInfo} />
      <ChatMessage />
      <ChatSend
      // roomId={roomId}
      // loginUser={loginUser}
      // updateMessages={updateMessages}
      // setLoading={setLoading}
      />
    </div>
  );
};

export default ChatRoom;
