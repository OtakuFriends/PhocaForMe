"use client";
import styles from "./index.module.css";
import { Bell, Chat, Hamburger, Location, Logo, Logout, User } from "#/svgs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Menu from "../Menu";
import MenuOption from "../Menu/MenuOption";

const Header = () => {
  const router = useRouter();
  const goToMain = () => {
    router.push("/main");
  };
  const goToAlarm = () => {
    router.push("/alarm");
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <nav id={styles.navContainer}>
        <Hamburger id={styles.hamburger} onClick={() => setIsOpen(!isOpen)} />
        <Logo id={styles.logo} onClick={goToMain} />
        <Bell id={styles.bell} onClick={goToAlarm} />
      </nav>

      {/* 메뉴 오버레이 */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <Menu>
            <MenuOption
              icon={<Location />}
              content="직거래 가능 옵션"
              gps={true}
            />
            <MenuOption icon={<Chat />} content="나의 채팅함" />
            <MenuOption icon={<User />} content="마이페이지" />
            <MenuOption
              icon={<Logout />}
              content="로그아웃"
              className="logout"
            />
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Header;
