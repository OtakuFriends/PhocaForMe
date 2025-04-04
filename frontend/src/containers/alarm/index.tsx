"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import List from "@/components/List";
import { Check } from "#/svgs";

interface Alarm {
  id: number;
  userId: string; // 알림 주체
  title: string;
  content: string;
  createdAt: Date;
  readStatus: boolean;
  deleteStatus: boolean;
  type: "Chatting" | "Article";
  articleId: number;
}

const Alarm = () => {
  const [list, setList] = useState<Alarm[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    setList([
      {
        id: 1,
        userId: "1",
        title: "title",
        content: "content",
        createdAt: new Date(),
        readStatus: false,
        deleteStatus: false,
        type: "Article",
        articleId: 1,
      },
      {
        id: 2,
        userId: "2",
        title: "title",
        content: "content",
        createdAt: new Date(),
        readStatus: true,
        deleteStatus: false,
        type: "Chatting",
        articleId: 0,
      },
    ]);
  }, []);

  const handleCheck = () => {
    setList((prevList) =>
      prevList.map((alarm) => ({ ...alarm, readStatus: true }))
    );
    setIsChecked(true);
  };

  return (
    <div id={styles.container}>
      <div>
        <Title size="large">알림 목록</Title>
        <div className={styles.checkContainer} onClick={handleCheck}>
          <div className={styles.checkbox}>{isChecked ? <Check /> : null}</div>
          <div>모두 읽음으로 변경</div>
        </div>
      </div>
      <List alarmlist={list} />
    </div>
  );
};

export default Alarm;
