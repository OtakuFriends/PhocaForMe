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
  const goToChatList = () => {
    router.push("/chatlist");
  };
  const goToMyPage = () => {
    router.push("/mypage");
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
              action={(
                event:
                  | React.TouchEvent<HTMLDivElement>
                  | React.MouseEvent<HTMLDivElement>
              ) => event.stopPropagation()}
            />
            <MenuOption
              icon={<Chat />}
              content="나의 채팅함"
              action={goToChatList}
            />
            <MenuOption
              icon={<User />}
              content="마이페이지"
              action={goToMyPage}
            />
            <MenuOption
              icon={<Logout />}
              content="로그아웃"
              className="pink"
              action={goToMain}
            />
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Header;
