"use client";
import { Bell, Hamburger, Logo } from "#/svgs";
import { useRouter } from "next/navigation";
import "./index.css";

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
    <nav>
      <Hamburger id="hamburger" onClick={openMenu} />
      <Logo id="logo" onClick={goToMain} />
      <Bell id="bell" onClick={goToAlarm} />
    </nav>
  );
};

export default Header;
