import styles from "./index.module.css";

interface Props {
  open: boolean;
  handleClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, handleClose, children }: Props) => {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
