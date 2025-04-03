import { useRef } from "react";
import styles from "./index.module.css";

interface Props {
  isOn: boolean;
  onToggle: (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
}

const ToggleButton = ({ isOn, onToggle }: Props) => {
  const touchRef = useRef(false); // 터치 이벤트 발생 여부 저장

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    touchRef.current = true; // 터치 이벤트 발생
    onToggle(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (touchRef.current) {
      touchRef.current = false; // 터치 이벤트가 실행된 경우 클릭 무시
      return;
    }
    onToggle(event);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={handleClick}
        onTouchEnd={handleTouchEnd}
        className={`${styles.toggleContainer} ${isOn ? "" : styles.off}`}
      >
        <button className={styles.circle}></button>
      </div>
    </div>
  );
};

export default ToggleButton;
