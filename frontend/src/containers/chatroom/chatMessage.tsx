"use client";
import styles from "./index.module.css";
import { Pin } from "#/svgs";
import { useEffect, useRef, useState } from "react";
import Bubble from "@/components/Bubble";

interface Props {
  roomId: number;
  loginUser: string;
}

interface Chat {
  id: number;
  roomId: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
  senderId: string;
  imgCode: string;
}

const ChatMessage = ({ roomId, loginUser }: Props) => {
  const [chatting, setChatting] = useState<Chat[]>([]);
  const sendMessageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(roomId + " 방의 채팅내역 가져오기...");
    setChatting([
      {
        id: 1,
        roomId: 1,
        message: "안녕하세요",
        isRead: true,
        createdAt: new Date(),
        senderId: "1",
        imgCode: "",
      },
      {
        id: 2,
        roomId: 1,
        message: "마크 구하시는 거 맞나요?",
        isRead: true,
        createdAt: new Date(),
        senderId: "1",
        imgCode: "",
      },
      {
        id: 3,
        roomId: 1,
        message: `네!
        
        원하시는 인증 있으면 알려주세요
        
        빛비춤 하자는 확인 못해드려요
        
        배송은 gs 반택으로 합니다
        
        마크 a버전은 이미 구해서 제외하고 사진 부탁드려요
        
        연락처랑 배송지 남겨주세요`,
        isRead: true,
        createdAt: new Date(),
        senderId: "2",
        imgCode: "",
      },
      {
        id: 4,
        roomId: 1,
        message: `네!
        
        원하시는 인증 있으면 알려주세요
        
        빛비춤 하자는 확인 못해드려요
        
        배송은 gs 반택으로 합니다
        
        마크 a버전은 이미 구해서 제외하고 사진 부탁드려요
        
        연락처랑 배송지 남겨주세요`,
        isRead: true,
        createdAt: new Date(),
        senderId: "2",
        imgCode: "",
      },
    ]);
  }, [roomId]);

  useEffect(() => {
    if (sendMessageBoxRef.current) {
      window.scrollTo({ top: sendMessageBoxRef.current.scrollHeight });
    }
  }, [chatting]);

  return (
    <div className={styles.message}>
      <div className={styles.noticeBox}>
        <Pin className={styles.noticeIcon} /> 거래가 처음이신가요?{" "}
        <a href="/help" className={styles.help}>
          인증가이드
        </a>
        를 읽고 믿을 수 있는 거래 하세요!
      </div>
      <div className={styles.bubbleBox}>
        {chatting.map((chat) => (
          <Bubble key={chat.id} chat={chat} loginUser={loginUser} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;
