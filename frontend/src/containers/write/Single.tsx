"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Option } from "@/types";

interface Props {
  title: string;
  options: Option[];
}

const Single = ({ title, options }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option | null) => {
    setSelectedOption(option);
  };

  const SelectBox = dynamic(() => import("@/components/Select"), {
    ssr: false,
  });

  return (
    <div id={styles.single}>
      <Title size="medium" id={styles.title}>
        {title}
      </Title>
      <div className={styles.selectbox}>
        <SelectBox
          options={options}
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};

export default Single;
