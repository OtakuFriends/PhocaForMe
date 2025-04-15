"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";
import NicknameModal from "./NicknameModal";

interface Props {
  loginUser: string;
}

const Nickname = ({ loginUser }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
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
      {/* 수정 모달 */}
      {open && (
        <Modal open={open}>
          <NicknameModal
            loginUser={loginUser}
            handleClose={() => setOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Nickname;
