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
import { Post } from "@/types";
import { groupOption } from "@/constants/groupOption";
import { memberOption } from "@/constants/memberOption";
import { cardOptions } from "@/constants/cardOption";

const Write = () => {
  // post data
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    content: "",
    selectedGroup: null,
    cardType: null,
    ownMembers: [],
    targetMembers: [],
    images: [],
  });

  const router = useRouter();

  useEffect(() => {
    // to do
    // 그룹 선택에 따라 멤버 옵션 달라져야 함
  }, []);

  const handleSubmit = () => {
    console.log("데이터:", post);
  };

  return (
    <div id={styles.container}>
      <Title size="large">게시글 작성하기</Title>
      <Photo
        images={post.images}
        setImages={(val) => setPost((prev) => ({ ...prev, images: val }))}
      />
      <Text
        type="title"
        value={post.title}
        setValue={(val) => setPost((prev) => ({ ...prev, title: val }))}
      />
      <Single
        title="그룹명"
        options={groupOption}
        value={post.selectedGroup}
        setValue={(val) => setPost((prev) => ({ ...prev, selectedGroup: val }))}
      />
      <Double
        title={["보유한 멤버", "찾는 멤버"]}
        options={memberOption}
        own={post.ownMembers}
        target={post.targetMembers}
        setOwn={(val) => setPost((prev) => ({ ...prev, ownMembers: val }))}
        setTarget={(val) =>
          setPost((prev) => ({ ...prev, targetMembers: val }))
        }
      />
      <Single
        title="포토카드 종류"
        options={cardOptions}
        value={post.cardType}
        setValue={(val) => setPost((prev) => ({ ...prev, cardType: val }))}
      />
      <Text
        type="content"
        value={post.content}
        setValue={(val) => setPost((prev) => ({ ...prev, content: val }))}
      />
      <div className={styles.buttonContainer}>
        <Button size="large" content="게시글 등록" action={handleSubmit} />
        <Button
          className="purple"
          size="large"
          content="취소"
          action={() => router.back()}
        />
      </div>
    </div>
  );
};

export default Write;
