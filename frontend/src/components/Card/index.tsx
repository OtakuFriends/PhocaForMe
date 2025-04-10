"use client";
import styles from "./index.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Title from "../Title";

interface Card {
  boardId: number;
  title: string;
  content: string;
  cardType: string;
  status: number;
  bartered: number;
  groupId: number;
  createdDate: Date;
  lastModifiedDate: Date;
  userId: number;
  imageSrc: string;
  findId: number;
  ownId: number;
}

const Card = ({ boardId, title, imageSrc, findId, ownId, bartered }: Card) => {
  const router = useRouter();
  const goToDetail = () => {
    router.push("/carddetail/" + boardId);
  };

  return (
    <div
      className={`${styles.container} ${bartered ? styles.bartered : null}`}
      onClick={goToDetail}
    >
      {bartered ? <div className={styles.barteredText}>교환완료</div> : null}
      <div id={styles.imageContainer}>
        <Image
          fill
          style={{ objectFit: "cover" }}
          sizes="80vw"
          alt="photocard"
          src={imageSrc}
        ></Image>
      </div>
      <div id={styles.contentContainer}>
        <Title size="small" id={styles.titleContainer}>
          {title}
        </Title>
        <div id={styles.hr} />
        <div>
          <p className={styles.text}>있어요: {ownId}</p>
          <p className={styles.text}>구해요: {findId}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
