import styles from "./index.module.css";

interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <div className={styles.menu}>{children}</div>;
};

export default Menu;
