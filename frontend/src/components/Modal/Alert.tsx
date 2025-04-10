import { Info } from "#/svgs";
import Button from "../Button";
import styles from "./index.module.css";

interface Props {
  text: string;
  buttons: string[];
  handleClose: (() => void)[];
}

const Alert = ({ text, buttons, handleClose }: Props) => {
  return (
    <div className={styles.alert}>
      <div className={styles.alertText}>
        <div className={styles.info}>
          <Info />
        </div>

        {text}
      </div>
      {buttons.length == 1 ? (
        <div className={styles.buttonContainer}>
          <Button size="large" content={buttons[0]} action={handleClose[0]} />
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <Button
            size="large"
            className="gray"
            content={buttons[0]}
            action={handleClose[0]}
          />
          <Button size="large" content={buttons[1]} action={handleClose[1]} />
        </div>
      )}
    </div>
  );
};

export default Alert;
