import Card from "@/components/Card";
import styles from "./index.module.css";

import Title from "@/components/Title";
const CardList = () => {
  const cardData = {
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
      "https://img.notionusercontent.com/s3/prod-files-secure%2F32b54871-9d93-4376-bc12-b11af2bce837%2Fbae78b39-136f-41a7-80fa-4ddee244e9fd%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg/size/w=2000?exp=1743690284&sig=CVfFR1xfExZhP05odRvg2ecic-ghppnXUD7V4HUUUV8&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&table=block&userId=af2ebfd7-89f6-4fda-a2ff-b66365d8510b",
  };

  return (
    <div>
      <Title size="large">둘러보기 🔍</Title>
      <div id={styles.cardContainer}>
        <Card {...cardData} />
      </div>
    </div>
  );
};

export default CardList;
