"use client";
import { useParams } from "next/navigation";

const ChatRoom = () => {
  const { roomId } = useParams();
  return <h1>{roomId} 채팅방</h1>;
};

export default ChatRoom;
