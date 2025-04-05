"use client";
import Card from "@/components/Card";
import styles from "./index.module.css";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const cardDataList = [
  {
    title: "원영이 포카 데려가세요",
    content: "This card uses an object",
    boardId: 1,
    cardType: "앨범포카",
    status: 0,
    bartered: 0,
    groupId: 10,
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    userId: 1,
    findId: 50,
    ownId: 40,
    imageSrc:
      "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
  },
  {
    title: "장원영 포카 교환 가능",
    content: "교환 문의 주세요!",
    boardId: 2,
    cardType: "앨범포카",
    status: 1,
    bartered: 0,
    groupId: 10,
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    userId: 2,
    findId: 51,
    ownId: 41,
    imageSrc:
      "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
  },
  {
    title: "아이브 포카 판매",
    content: "소량 보유 중!",
    boardId: 3,
    cardType: "기타",
    status: 1,
    bartered: 1,
    groupId: 10,
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    userId: 3,
    findId: 52,
    ownId: 42,
    imageSrc:
      "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
  },
  {
    title: "IVE 장원영 포카 구매",
    content: "구매 원합니다!",
    boardId: 4,
    cardType: "기타",
    status: 0,
    bartered: 0,
    groupId: 10,
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    userId: 4,
    findId: 53,
    ownId: 43,
    imageSrc:
      "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
  },
];

const CardList = () => {
  const router = useRouter();
  const goToCardList = () => {
    router.push("/cardlist");
  };

  return (
    <div id={styles.cardListContainer}>
      <Title size="large">둘러보기 🔍</Title>
      <div id={styles.cardContainer}>
        {cardDataList.map((card) => (
          <Card key={card.boardId} {...card} />
        ))}
      </div>
      <div id={styles.buttonContainer}>
        <Button size="large" content="+ 더보기" action={goToCardList} />
      </div>
    </div>
  );
};

export default CardList;
