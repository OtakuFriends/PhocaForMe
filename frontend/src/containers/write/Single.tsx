"use client";

import Title from "@/components/Title";
import styles from "./index.module.css";

interface Props {
  title: string;
}

const Single = ({ title }: Props) => {
  return (
    <div id={styles.single}>
      <Title size="medium" id={styles.title}>
        {title}
      </Title>
    </div>
  );
};

export default Single;
