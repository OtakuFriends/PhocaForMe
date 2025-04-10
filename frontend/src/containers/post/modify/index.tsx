"use client";

import Title from "@/components/Title";
import styles from "../index.module.css";
import Photo from "../Photo";
import Text from "../Text";
import Single from "../Single";
import Double from "../Double";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { Post, PostError } from "@/types";
import { usePostStore } from "@/store/usePostStore";
import { cardOptions } from "@/constants/cardOption";
import { groupOption } from "@/constants/groupOption";
import { memberOption } from "@/constants/memberOption";
import Modal from "@/components/Modal";
import Alert from "@/components/Modal/Alert";

const Modify = () => {
  const router = useRouter();

  // 기존 데이터 세팅
  const data = usePostStore((state) => state.post);
  const [post, setPost] = useState<Post | null>(null);
  const clearPost = usePostStore((state) => state.clearPost);

  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<PostError>({
    title: false,
    content: false,
    selectedGroup: false,
    cardType: false,
    ownMembers: false,
    targetMembers: false,
  });

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  useEffect(() => {
    // to do
    // 그룹 선택에 따라 멤버 옵션 달라져야 함
  }, []);

  const handleSubmit = () => {
    const newError = {
      title: post?.title.trim() === "",
      content: post?.content.trim() === "",
      selectedGroup: post?.selectedGroup === null,
      cardType: post?.cardType === null,
      ownMembers: post?.ownMembers.length === 0,
      targetMembers: post?.targetMembers.length === 0,
    };

    setError(newError);
    const hasError = Object.values(newError).some((v) => v);
    if (hasError) {
      setOpen(true);
    } else {
      // todo
      // 게시글 수정 api
      console.log("수정된 데이터:", post);
      clearPost();
      router.push(`/carddetail/${post?.id}`);
    }
  };

  if (!post) {
    return null;
  }

  return (
    <div id={styles.container}>
      <Title size="large">게시글 수정하기</Title>
      <Photo
        images={post.images}
        setImages={(val) => setPost((prev) => ({ ...prev!, images: val }))}
      />
      <Text
        type="title"
        value={post.title}
        error={error.title}
        setValue={(val) => {
          setPost((prev) => ({ ...prev!, title: val }));
          if (error.title && val.trim() !== "") {
            setError((prev) => ({ ...prev, title: false }));
          }
        }}
      />
      <Single
        title="그룹명"
        options={groupOption}
        value={post.selectedGroup}
        error={error.selectedGroup}
        setValue={(val) => {
          setPost((prev) => ({ ...prev!, selectedGroup: val }));
          if (error.selectedGroup && val !== null) {
            setError((prev) => ({ ...prev, selectedGroup: false }));
          }
        }}
      />
      <Double
        title={["보유한 멤버", "찾는 멤버"]}
        options={memberOption}
        own={post.ownMembers}
        target={post.targetMembers}
        error={[error.ownMembers, error.targetMembers]}
        setOwn={(val) => {
          setPost((prev) => ({ ...prev!, ownMembers: val }));
          if (error.ownMembers && val.length !== 0) {
            setError((prev) => ({ ...prev, ownMembers: false }));
          }
        }}
        setTarget={(val) => {
          setPost((prev) => ({ ...prev!, targetMembers: val }));
          if (error.targetMembers && val.length !== 0) {
            setError((prev) => ({ ...prev, targetMembers: false }));
          }
        }}
      />
      <Single
        title="포토카드 종류"
        options={cardOptions}
        value={post.cardType}
        error={error.cardType}
        setValue={(val) => {
          setPost((prev) => ({ ...prev!, cardType: val }));
          if (error.cardType && val !== null) {
            setError((prev) => ({ ...prev, cardType: false }));
          }
        }}
      />
      <Text
        type="content"
        value={post.content}
        error={error.content}
        setValue={(val) => {
          setPost((prev) => ({ ...prev!, content: val }));
          if (error.content && val.trim() !== "") {
            setError((prev) => ({ ...prev, content: false }));
          }
        }}
      />
      <div className={styles.buttonContainer}>
        <Button size="large" content="수정완료" action={handleSubmit} />
        <Button
          className="purple"
          size="large"
          content="취소"
          action={() => router.back()}
        />
      </div>
      {open ? (
        <Modal open={open} handleClose={() => setOpen(false)}>
          <Alert
            text="필수항목을 모두 작성해주세요."
            buttons={["확인"]}
            handleClose={[() => setOpen(false)]}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Modify;
