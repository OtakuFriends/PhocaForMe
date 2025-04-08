"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";
import Photo from "./Photo";
import Text from "./Text";
import Single from "./Single";
import Double from "./Double";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

interface Option {
  value: string;
  label: string;
}

const Write = () => {
  const [groupOption, setGroupOption] = useState<Option[]>([]);
  const [cardOption, setCardOption] = useState<Option[]>([]);
  const [memberOption, setMemberOption] = useState<Option[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCardOption([
      {
        value: "앨범포카",
        label: "앨범포카",
      },
      {
        value: "미공포",
        label: "미공포",
      },
      {
        value: "기타",
        label: "기타",
      },
    ]);

    setGroupOption([
      {
        value: "1",
        label: "소녀시대",
      },
      {
        value: "2",
        label: "샤이니",
      },
      {
        value: "3",
        label: "엑소",
      },
    ]);
    // 그룹 선택에 따라 멤버 옵션 달라져야 함
    setMemberOption([
      { value: "1", label: "태연" },
      { value: "2", label: "티파니" },
      { value: "3", label: "써니" },
      // { value: "4", label: "종현" },
      // { value: "5", label: "키" },
      // { value: "6", label: "태민" },
      // { value: "7", label: "민호" },
      // { value: "8", label: "시우민" },
      // { value: "9", label: "수호" },
      // { value: "10", label: "디오" },
    ]);
  }, []);

  const handleSubmit = () => {
    console.log("제출");
  };

  return (
    <div id={styles.container}>
      <Title size="large">게시글 작성하기</Title>
      <Photo />
      <Text type="title" />
      <Single title="그룹명" options={groupOption} />
      <Double title={["보유한 멤버", "찾는 멤버"]} options={memberOption} />
      <Single title="포토카드 종류" options={cardOption} />
      <Text type="content" />
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
