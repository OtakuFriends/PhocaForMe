import { Close } from "#/svgs";
import styles from "./index.module.css";

interface Props {
  text: string;
  handleDelete: () => void;
}

const Chip = ({ text, handleDelete }: Props) => {
  return (
    <div id={styles.container}>
      <div>{text}</div>
      <div className={styles.svg} onClick={handleDelete}>
        <Close />
      </div>
    </div>
  );
};

export default Chip;
