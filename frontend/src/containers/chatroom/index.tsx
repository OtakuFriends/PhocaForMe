"use client";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

// import { sendChat, initChat } from "@/store/chat";

import ChatTop from "./chatTop";
import ChatSend from "./chatSend";
import ChatMessage from "./chatMessage";
import { ChatRoomType, TopInfo } from "@/types";

interface Props {
  roomId: number;
}

const ChatRoom = ({ roomId }: Props) => {
  const [chatroom, setChatroom] = useState<ChatRoomType>();
  const [topInfo, setTopInfo] = useState<TopInfo>();
  // const [loading, setLoading] = useState(false);

  const loginUser = "2";

  // const updateMessages = (receive) => {
  //   if (receive && !receive.type) {
  //     const newMessage = {
  //       chatRoomId: receive.chatRoomId,
  //       createdAt: new Date().toISOString(),
  //       imgCode: receive.imgCode,
  //       message: receive.message,
  //       userEmail: receive.userEmail,
  //     };
  //     if (newMessage.message || newMessage.imgCode !== null) {
  //       dispatch(sendChat(newMessage));
  //     }
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    // 잘못된 접근 돌려보내기
    // 내가 visitor 인지 owner 인지 체크
  }, []);

  useEffect(() => {
    setChatroom({
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
    });
  }, []);

  useEffect(() => {
    if (chatroom) {
      const { id, boardId, boardtitle, ownerId, visitorId } = chatroom;
      setTopInfo({ id, boardId, boardtitle, ownerId, visitorId });
    }
  }, [chatroom]);

  return (
    <div className={styles.container}>
      <ChatTop info={topInfo} loginUser={loginUser} />
      <ChatMessage roomId={roomId} loginUser={loginUser} />
      <ChatSend />
    </div>
  );
};

export default ChatRoom;
