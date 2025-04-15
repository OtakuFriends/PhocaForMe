import { useState } from "react";
import ToggleButton from "../Toggle";
import styles from "./index.module.css";
import { getAddressFromCoords } from "@/api/geolocation";

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
  const [isOn, setIsOn] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const fetchData = async (latitude: number, longitude: number) => {
    const addr = await getAddressFromCoords(latitude, longitude);
    setLocation(addr);
  };

  const handleToggle = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    if (!isOn) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchData(position.coords.longitude, position.coords.latitude);
        // setLocation(`${position.coords.longitude} ${position.coords.latitude}`);
      });
    }
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
          {isOn && <div>*현위치: {location}</div>}
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
