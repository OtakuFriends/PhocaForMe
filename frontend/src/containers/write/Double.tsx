"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import { Option } from "@/types";
import { useState } from "react";
import dynamic from "next/dynamic";

interface Props {
  title: string[];
  options: Option[];
}

const Double = ({ title, options }: Props) => {
  const SelectBox = dynamic(() => import("@/components/Select"), {
    ssr: false,
  });

  const [val1, setVal1] = useState<Option | null>(null);
  const [val2, setVal2] = useState<Option | null>(null);

  const handleSelect1 = (option: Option | null) => {
    setVal1(option);
  };

  const handleSelect2 = (option: Option | null) => {
    setVal2(option);
  };

  return (
    <div id={styles.double}>
      <div>
        <Title size="medium" id={styles.title}>
          {title[0]}
        </Title>
        <div className={styles.selectbox}>
          <SelectBox options={options} onChange={handleSelect1} value={val1} />
        </div>
      </div>
      <div>
        <Title size="medium" id={styles.title}>
          {title[1]}
        </Title>
        <div className={styles.selectbox}>
          <SelectBox options={options} onChange={handleSelect2} value={val2} />
        </div>
      </div>
    </div>
  );
};

export default Double;
