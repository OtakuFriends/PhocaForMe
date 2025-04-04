import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Image from "next/image";
import { Kanban, Pencil, Trash } from "#/svgs";
import MenuOption from "@/components/Menu/MenuOption";
import Menu from "@/components/Menu";

interface Props {
  cardId: number;
}

interface Post {
  title: string;
  content: string;
  boardId: number;
  cardType: string;
  status: number;
  bartered: boolean;
  groupId: number;
  createdDate: Date;
  lastModifiedDate: Date;
  userId: number;
  findId: number[];
  ownId: number;
  imageSrc: string[];
}

const CardDetail = ({ cardId }: Props) => {
  const router = useRouter();
  const user = 1;
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false); // 이미지 전체보기
  const [isOpen, setIsOpen] = useState(false); // 작성자 메뉴
  const [imageSrc, setImageSrc] = useState<string>("");
  // const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setPost({
      title: "원영이 포카 데려가세요 너무 예뻐요 진짜 초미녀임",
      content:
        "This card uses an object. This card uses an object. This card uses an object. This card uses an object. This card uses an object. ",
      boardId: 1,
      cardType: "앨범포카",
      status: 0,
      bartered: false,
      groupId: 10,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
      userId: 1,
      findId: [50, 51],
      ownId: 40,
      imageSrc: [
        "https://img.notionusercontent.com/s3/prod-files-secure%2F32b54871-9d93-4376-bc12-b11af2bce837%2Fbae78b39-136f-41a7-80fa-4ddee244e9fd%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg/size/w=2000?exp=1743690284&sig=CVfFR1xfExZhP05odRvg2ecic-ghppnXUD7V4HUUUV8&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&table=block&userId=af2ebfd7-89f6-4fda-a2ff-b66365d8510b",
        "https://img.notionusercontent.com/s3/prod-files-secure%2F32b54871-9d93-4376-bc12-b11af2bce837%2Fbae78b39-136f-41a7-80fa-4ddee244e9fd%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg/size/w=2000?exp=1743690284&sig=CVfFR1xfExZhP05odRvg2ecic-ghppnXUD7V4HUUUV8&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&table=block&userId=af2ebfd7-89f6-4fda-a2ff-b66365d8510b",
        "https://img.notionusercontent.com/s3/prod-files-secure%2F32b54871-9d93-4376-bc12-b11af2bce837%2Fbae78b39-136f-41a7-80fa-4ddee244e9fd%2F%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg/size/w=2000?exp=1743690284&sig=CVfFR1xfExZhP05odRvg2ecic-ghppnXUD7V4HUUUV8&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&table=block&userId=af2ebfd7-89f6-4fda-a2ff-b66365d8510b",
        "https://gdimg.gmarket.co.kr/4324438323/still/280?ver=1739965506",
      ],
    });
    setLoading(false);
  }, [cardId]);

  const handleClickOpen = (src: string) => {
    setImageSrc(src);
    console.log(src);
    setOpen(true);
  };

  const handleChatClick = () => {
    // 채팅방 생성 후 이동 or 기존 채팅방으로 이동
    router.push("/chatroom/1");
  };

  const goToModify = () => {
    router.push("/modify");
  };

  const deletePost = () => {
    // 삭제 후 뒤로 가기
    router.back();
  };

  if (loading) return <div>로딩중</div>;

  if (!post)
    return <div className={styles.caution}>이미 삭제된 게시글입니다.</div>;

  return (
    <div className={styles.card}>
      <div onClick={() => router.push("/main")} className={styles.moveButton}>
        ← 목록으로
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{post.title}</div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {user == post.userId ? <Kanban /> : null}
        </div>
      </div>

      {isOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsOpen(false)}>
          <Menu>
            <MenuOption
              icon={<Pencil />}
              content="게시글 수정"
              action={goToModify}
            />
            <MenuOption
              icon={<Trash />}
              content="게시글 삭제"
              className="pink"
              action={deletePost}
            />
          </Menu>
        </div>
      )}

      <div id={styles.hr} />
      <div className={styles.subtitle}>
        <div className={styles.writer}>{`작성자 ✦ ${post.userId}`}</div>
        <div className={styles.cardType}>{post.cardType}</div>
      </div>

      <div className={styles.imageList}>
        {post.imageSrc.map((image, index) => (
          <div key={index} className={styles.imageLayout}>
            <Image
              alt="포토카드 이미지"
              onClick={() => handleClickOpen(image)}
              layout="fill"
              objectFit="cover"
              src={image}
              loading="lazy"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <Image
          alt="확대이미지"
          src={imageSrc}
          layout="intrinsic"
          width={500}
          height={500}
        />
      </Modal>

      <div className={styles.writer}>
        {`있어요: ${post.ownId} ✦ 구해요: ${post.findId.join(", ")}`}
      </div>

      <div id={styles.hr} />

      <div className={styles.content}>{post.content}</div>
      {user == post.userId ? null : (
        <div className={styles.buttonContainer}>
          <Button
            content="1:1 채팅하기"
            size="large"
            action={handleChatClick}
          />
        </div>
      )}

      {post.bartered && (
        <div className={styles.overlay}>
          <p className={styles.overlayText}>교환완료된</p>
          <p className={styles.overlayText}>상품입니다.</p>
          <div onClick={() => router.back()} className={styles.backButton}>
            뒤로가기
          </div>
        </div>
      )}
      {/* <NeedLogin
        handleModalClose={() => setModalOpen(false)}
        modalOpen={modalOpen}
      /> */}
    </div>
  );
};

export default CardDetail;
