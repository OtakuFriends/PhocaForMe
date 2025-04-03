import { useState } from "react";
import ToggleButton from "../Toggle";
import styles from "./index.module.css";

interface Props {
  icon: React.ReactNode;
  content: string;
  action: (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  className?: string;
  gps?: boolean;
}

const MenuOption = ({ icon, content, action, className, gps }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsOn((prev) => !prev);
  };

  if (gps) {
    return (
      <div className={styles.gpsContainer} onClick={action}>
        <div className={styles.optionTitle}>
          {icon}
          <div className={className ? styles[className] : ""}>{content}</div>
        </div>
        <div className={styles.optionContent}>
          <ToggleButton isOn={isOn} onToggle={handleToggle} />
          {isOn && <div>*현위치: 강남구 역삼동</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.optionContainer} onClick={action}>
      {icon}
      <div className={className ? styles[className] : ""}>{content}</div>
    </div>
  );
};

export default MenuOption;
