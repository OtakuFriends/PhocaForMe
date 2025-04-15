"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Single from "@/components/Select/Single";
import { groupOption } from "@/constants/groupOption";
import { useState } from "react";
import { Option } from "@/types";
import { memberOption } from "@/constants/memberOption";
import Button from "@/components/Button";
import Chip from "@/components/Chip";

const WishCard = () => {
  const [state, setState] = useState<number>(0); // 0은 정상 1은 중복 2는 키워드개수 초과
  const [group, setGroup] = useState<Option | null>(null);
  const [member, setMember] = useState<Option | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>([]);

  const handleGroup = (value: Option | null) => {
    setGroup(value);
  };
  const handleMember = (value: Option | null) => {
    setMember(value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(0);
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter") {
      event.preventDefault();
      handleKeywordList();
    }
  };

  const handleKeywordList = () => {
    const trimmed = keyword.trim();
    if (!trimmed || keywordList.includes(trimmed)) {
      setState(1);
      setKeyword("");
      return;
    }
    if (keywordList.length >= 3) {
      setState(2);
      setKeyword("");
      return;
    }
    setKeywordList((prev) => [...prev, trimmed]);
    setKeyword("");
  };

  const handleDelete = (target: string) => {
    setKeywordList((prev) => prev.filter((word) => word !== target));
  };

  const handleWishcard = () => {
    // to do
    // wishcard api로 적용하기
  };

  return (
    <div className={styles.gradient}>
      <div className={styles.wishcard}>
        <div>
          <Title size="medium">갈망포카 설정</Title>
          <div className={styles.subtitle}>
            *키워드가 정확할수록 갈망포카 알림이 정확해요!
          </div>
        </div>
        <div className={styles.select}>
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
        <div className={styles.keyword}>
          <div className={styles.keywordForm}>
            <input
              className={styles.keywordInput}
              value={keyword}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="앨범명, 버전명, 종류 등을 입력하세요."
              type="text"
            ></input>
          </div>
          <div className={styles.alertText}>
            {state === 1
              ? "이미 존재하는 키워드입니다."
              : state === 2
              ? "키워드는 3개까지 가능합니다."
              : null}
          </div>
          <div className={styles.keywordContainer}>
            {keywordList.map((keyword) => (
              <Chip
                key={keyword}
                text={keyword}
                handleDelete={() => handleDelete(keyword)}
              />
            ))}
          </div>
        </div>
        <div className={styles.wishButton}>
          <Button content="적용" action={handleWishcard} size="small"></Button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
