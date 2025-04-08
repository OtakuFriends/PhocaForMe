"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";

interface Props {
  type: "title" | "content";
  value: string;
  setValue: (v: string) => void;
}

const Text = ({ type, value, setValue }: Props) => {
  // const [content, setContent] = useState<string>("");

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  return (
    <div id={styles.text}>
      <Title size="medium" id={styles.title}>
        {type === "title" ? "제목" : "상세 내용"}
      </Title>
      <div
        className={`${
          type === "title" ? styles.titleContainer : styles.contentContainer
        }`}
        id={styles.inputContainer}
      >
        {type === "title" ? (
          <input
            id={styles.textInput}
            placeholder="키워드를 넣어 작성하세요 (앨범명, 버전명 등)"
            type="text"
            value={value}
            onChange={handleInput}
          ></input>
        ) : (
          <textarea
            id={styles.textInput}
            placeholder="포토카드 상태에 대한 세부 내용을 적어주세요."
            value={value}
            onChange={handleInput}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default Text;
