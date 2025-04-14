"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";
import NicknameModal from "./NicknameModal";

const MyPage = () => {
  const loginUser = "아궁빵";
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.nickname}>
        <Title size="medium" id={styles.nicknameTitle}>
          닉네임
        </Title>
        <div className={styles.nicknameForm}>
          <input
            className={styles.nicknameInput}
            placeholder={loginUser}
            type="text"
            disabled={true}
          ></input>
        </div>
        <Button content="수정" action={() => setOpen(true)} size="small" />
      </div>
      {open && (
        <Modal open={open}>
          <NicknameModal
            loginUser={loginUser}
            handleClose={() => setOpen(false)}
          />
        </Modal>
      )}
      <div>
        <Title size="large">최애 설정</Title>
      </div>
      <div>
        <Title size="large">갈망포카 설정</Title>
      </div>
      <div>
        <Title size="large">최근 본 게시글</Title>
      </div>
      <div>
        <Title size="large">나의 게시글</Title>
      </div>
    </div>
  );
};

export default MyPage;
