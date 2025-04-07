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

  return (
    <div className={styles.send}>
      <div className={styles.plusContainer}>
        <Plus />
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
