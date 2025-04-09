"use client";
import { Plus } from "#/svgs";
import { usePathname, useRouter } from "next/navigation";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

const Floating = () => {
  const router = useRouter();
  const path = usePathname();
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (
      path.includes("chat") ||
      path.includes("write") ||
      path.includes("modify")
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [path]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.container}`}
      onClick={() => router.push("/write")}
    >
      <Plus />
    </div>
  );
};

export default Floating;
