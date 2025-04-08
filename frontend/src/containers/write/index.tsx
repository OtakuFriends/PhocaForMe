"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";
import Photo from "./Photo";
import Text from "./Text";
import Single from "./Single";
import Double from "./Double";
import { useEffect, useState } from "react";

interface Option {
  value: string;
  label: string;
}

const Write = () => {
  const [groupOption, setGroupOption] = useState<Option[]>([]);
  const [cardOption, setCardOption] = useState<Option[]>([]);

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
  }, []);

  return (
    <div id={styles.container}>
      <Title size="large">게시글 작성하기</Title>
      <Photo />
      <Text type="title" />
      <Single title="그룹명" options={groupOption} />
      <Double title={["보유한 멤버", "찾는 멤버"]} />
      <Single title="포토카드 종류" options={cardOption} />
      <Text type="content" />
    </div>
  );
};

export default Write;
