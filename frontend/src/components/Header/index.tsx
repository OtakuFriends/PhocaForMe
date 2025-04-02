"use client";
import styles from "./index.module.css";
import { Bell, Hamburger, Logo } from "#/svgs";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const openMenu = () => {};
  const goToMain = () => {
    router.push("/main");
  };
  const goToAlarm = () => {
    router.push("/alarm");
  };

  return (
    <nav id={styles.container}>
      <Hamburger id={styles.hamburger} onClick={openMenu} />
      <Logo id={styles.logo} onClick={goToMain} />
      <Bell id={styles.bell} onClick={goToAlarm} />
    </nav>
  );
};

export default Header;
