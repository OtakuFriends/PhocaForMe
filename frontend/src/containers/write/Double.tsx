"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";

interface Props {
  title: string[];
}
const Double = ({ title }: Props) => {
  return (
    <div id={styles.double}>
      <Title size="medium" id={styles.title}>
        {title[0]}
      </Title>
      <Title size="medium" id={styles.title}>
        {title[1]}
      </Title>
    </div>
  );
};

export default Double;
