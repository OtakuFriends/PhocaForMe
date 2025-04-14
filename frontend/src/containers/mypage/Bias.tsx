"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Single from "@/components/Select/Single";
import { groupOption } from "@/constants/groupOption";
import { useEffect, useState } from "react";
import { Option } from "@/types";
import { memberOption } from "@/constants/memberOption";
import Image from "next/image";
import Button from "@/components/Button";

const Bias = () => {
  const [group, setGroup] = useState<Option | null>(null);
  const [member, setMember] = useState<Option | null>(null);
  const [memberImg, setMemberImg] = useState<string>("");

  useEffect(() => {
    setMemberImg(
      "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fadc8f747-a751-437d-a063-915bc27cf424.jpg"
    );
  }, []);
  const handleGroup = (value: Option | null) => {
    setGroup(value);
  };
  const handleMember = (value: Option | null) => {
    setMember(value);
  };

  const handleBias = () => {
    // to do
    // group 과 member api로 적용하기
  };

  return (
    <div className={styles.gradient}>
      <div className={styles.bias}>
        <div>
          <Title size="medium">최애 설정</Title>
          <div className={styles.subtitle}>
            *설정된 최애는 내 프로필 사진이 돼요!
          </div>
        </div>
        <div className={styles.biasSelect}>
          <Single
            title="그룹명"
            font="normal"
            options={groupOption}
            value={group}
            setValue={(value) => handleGroup(value)}
          />
          <Single
            title="멤버명"
            font="normal"
            options={memberOption}
            value={member}
            setValue={(value) => handleMember(value)}
          />
        </div>
        <div className={styles.biasImage}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={memberImg}
              fill
              objectFit="cover"
              alt="bias image"
            />
          </div>
        </div>
        <div className={styles.biasButton}>
          <Button content="적용" action={handleBias} size="small"></Button>
        </div>
      </div>
    </div>
  );
};

export default Bias;
