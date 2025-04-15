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
  const [state, setState] = useState<boolean>(false);
  const handleNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleCheck = () => {
    // to do
    // 중복 체크
    setState(true);
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
            {loginUser == nickname && !state ? (
              <div />
            ) : state ? (
              <div className={styles.isValidText}>
                사용 가능한 닉네임입니다.
              </div>
            ) : (
              <div className={styles.isValidText}>중복된 닉네임입니다.</div>
            )}
          </div>
        </div>
        <div className={styles.button}>
          <Button size="small" action={handleCheck} content="중복체크"></Button>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button size="large" action={handleClose} content="확인" />
        <Button
          size="large"
          action={handleClose}
          content="취소"
          className="gray"
        />
      </div>
    </div>
  );
};

export default NicknameModal;
