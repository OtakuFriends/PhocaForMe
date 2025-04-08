"use client";
import { Check, Kanban, Trash } from "#/svgs";
import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
import Menu from "@/components/Menu";
import MenuOption from "@/components/Menu/MenuOption";
import { useRouter } from "next/navigation";
import { ChatInfo } from "@/types";

interface Props {
  info?: ChatInfo;
  loginUser: string;
}

const ChatTop = ({ info, loginUser }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOut = () => {
    // 채팅방 삭제 처리
    router.push("/chatlist");
  };

  const handleDone = () => {
    // 게시글 완료 처리
    router.push("/chatlist");
  };

  return (
    <div className={styles.top}>
      <div className={styles.topContainer}>
        <div className={styles.topTitleContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="게시글 썸네일"
              fill
              sizes="10vw"
              style={{ objectFit: "cover" }}
              src={
                "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2"
              }
            />
          </div>
          <div className={styles.topTitle}>{info?.visitorId}</div>
        </div>
        <div className={styles.kanban} onClick={() => setIsOpen(!isOpen)}>
          <Kanban />
        </div>
      </div>
      <div className={styles.topSubtitle}>{info?.boardtitle}</div>
      <div id={styles.hr}></div>

      {/* 메뉴 오버레이 */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <Menu>
            {loginUser == info?.ownerId ? (
              <MenuOption
                icon={<Check />}
                content="교환완료"
                className="gray"
                action={handleDone}
              />
            ) : null}

            <MenuOption
              icon={<Trash />}
              content="채팅방 나가기"
              className="pink"
              action={handleOut}
            />
          </Menu>
        </div>
      )}
    </div>
  );
};

export default ChatTop;
