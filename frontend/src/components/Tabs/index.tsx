"use client";
import { useState } from "react";
import styles from "./index.module.css";

interface TabsProps {
  labels: string[];
  children: React.ReactNode[];
}

const Tabs = ({ labels, children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 탭 index

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabLabels}>
        {labels.map((label, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{children[activeIndex]}</div>
    </div>
  );
};

export default Tabs;
