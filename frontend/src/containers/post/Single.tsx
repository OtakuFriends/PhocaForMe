"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

import { Option } from "@/types";
import SelectBox from "@/components/Select";

interface Props {
  title: string;
  options: Option[];
  value: Option | null;
  error?: boolean;
  setValue: (v: Option | null) => void;
}

const Single = ({ title, options, value, error, setValue }: Props) => {
  const handleSelect = (option: Option | null) => {
    console.log(option);
    setValue(option);
  };

  return (
    <div id={styles.single}>
      <Title size="medium" id={styles.title}>
        {title}
      </Title>
      <div className={`styles.selectbox ${error ? styles.errorContainer : ""}`}>
        <SelectBox options={options} value={value} onChange={handleSelect} />
      </div>
    </div>
  );
};

export default Single;
