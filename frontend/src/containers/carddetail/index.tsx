import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Image from "next/image";
import { Kanban, Pencil, Trash } from "#/svgs";
import MenuOption from "@/components/Menu/MenuOption";
import Menu from "@/components/Menu";
import { usePostStore } from "@/store/usePostStore";
import { Board } from "@/types";

interface Props {
  cardId: number;
}

const CardDetail = ({ cardId }: Props) => {
  const router = useRouter();
  const user = 1;
  const [post, setPost] = useState<Board | null>(null);
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
      id: 1,
      cardType: { label: "앨범포카", value: "앨범포카" },
      status: 0,
      bartered: false,
      selectedGroup: { label: "소녀시대", value: "1" },
      createdDate: new Date(),
      lastModifiedDate: new Date(),
      userId: 1,
      targetMembers: [{ label: "태연", value: "1" }],
      ownMembers: [{ label: "티파니", value: "2" }],
      images: [
        "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
        "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
        "https://blogog.notion.site/image/attachment%3Abae78b39-136f-41a7-80fa-4ddee244e9fd%3A%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC.jpeg?table=block&id=1c9c9b3d-a83e-8056-8366-fa5c37756cd5&spaceId=32b54871-9d93-4376-bc12-b11af2bce837&width=1240&userId=&cache=v2",
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

  const setPostStore = usePostStore((state) => state.setPost);
  const goToModify = () => {
    if (post) {
      setPostStore(post);
    }
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
        <div className={styles.cardType}>{post.cardType?.label}</div>
      </div>

      <div className={styles.imageList}>
        {post.images.map((image, index) => (
          <div key={index} className={styles.imageLayout}>
            <Image
              alt="포토카드 이미지"
              onClick={() => handleClickOpen(image)}
              fill
              style={{ objectFit: "cover" }}
              sizes="80vw"
              src={image}
              className={styles.image}
              priority={true}
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
        {`있어요: ${post.ownMembers
          .map((member) => member.label)
          .join(", ")} ✦ 구해요: ${post.targetMembers
          .map((member) => member.label)
          .join(", ")}`}
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
