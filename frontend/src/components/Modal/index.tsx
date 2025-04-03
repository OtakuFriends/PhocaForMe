import styles from "./index.module.css";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, handleClose, children }: Props) => {
  if (!open) return null; // open이 false면 렌더링하지 않음

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
