"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import React, { useState } from "react";
import Button from "@/components/Button";

interface Props {
  loginUser: string;
  handleClose: () => void;
}

const NicknameModal = ({ loginUser, handleClose }: Props) => {
  const [nickname, setNickname] = useState<string>(loginUser);
  const [state, setState] = useState<number>(0); // 0은 체크 전 1은 가능 -1은 중복
  const handleNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setState(0);
  };

  const handleCheck = () => {
    // to do
    // 중복 체크
    setState(1);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>
        <Title size="medium">새로운 닉네임</Title>
      </div>
      <div className={styles.checkInput}>
        <div className={styles.inputAndText}>
          <div className={styles.nicknameForm}>
            <input
              className={styles.nicknameInput}
              placeholder="2글자 이상 입력해주세요."
              type="text"
              value={nickname}
              onChange={handleNickname}
            ></input>
          </div>
          <div className={styles.isValid}>
            {state === 0 ? (
              <div />
            ) : state === 1 ? (
              <div className={styles.isValidText}>
                사용 가능한 닉네임입니다.
              </div>
            ) : (
              <div className={styles.isValidText}>중복된 닉네임입니다.</div>
            )}
          </div>
        </div>
        <div className={styles.button} onClick={handleCheck}>
          중복체크
          {/* <Button size="small" action={handleCheck} content="중복체크"></Button> */}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button size="small" action={handleClose} content="확인" />
        <Button
          size="small"
          action={handleClose}
          content="취소"
          className="gray"
        />
      </div>
    </div>
  );
};

export default NicknameModal;
