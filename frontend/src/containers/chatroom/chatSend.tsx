"use client";
import { Plus } from "#/svgs";
import { useState } from "react";
import styles from "./index.module.css";

const ChatSend = () => {
  const [message, setMessage] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    console.log("메시지 전송:", message);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      console.log("업로드된 파일 리스트:", file);
    }
  };

  return (
    <div className={styles.send}>
      <div>
        <label htmlFor="fileUpload" className={styles.plusContainer}>
          <Plus />
        </label>
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          className={styles.fileInput}
          onChange={handleFile}
        />
      </div>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          className={styles.inputContainer}
          type="text"
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        ></input>
      </form>
    </div>
  );
};

export default ChatSend;
