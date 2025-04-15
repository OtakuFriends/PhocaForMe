"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

import { Option } from "@/types";
import SelectBox from "@/components/Select";

interface Props {
  title: string;
  font?: string;
  options: Option[];
  value: Option | null;
  error?: boolean;
  setValue: (v: Option | null) => void;
}

const Single = ({ title, font, options, value, error, setValue }: Props) => {
  const handleSelect = (option: Option | null) => {
    setValue(option);
  };

  return (
    <div id={styles.single}>
      <Title size="small" id={styles.title} font={font}>
        {title}
      </Title>
      <div className={`styles.selectbox ${error ? styles.errorContainer : ""}`}>
        <SelectBox options={options} value={value} onChange={handleSelect} />
      </div>
    </div>
  );
};

export default Single;
