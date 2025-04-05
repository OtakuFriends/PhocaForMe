"use client";
import { useParams } from "next/navigation";
import ChatRoom from "@/containers/chatroom";

const ChatRoomPage = () => {
  const { roomId } = useParams() as { roomId: string };
  const parsedRoomId = parseInt(roomId, 10); // 숫자로 변환

  return <ChatRoom roomId={parsedRoomId} />;
};

export default ChatRoomPage;
