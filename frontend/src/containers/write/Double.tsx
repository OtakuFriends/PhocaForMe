"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import { Option } from "@/types";
import { useState } from "react";
import dynamic from "next/dynamic";
import Chip from "@/components/Chip";

interface Props {
  title: string[];
  options: Option[];
}

const Double = ({ title, options }: Props) => {
  const SelectBox = dynamic(() => import("@/components/Select"), {
    ssr: false,
  });

  const [val1, setVal1] = useState<Option | null>(null);
  const [valList1, setValList1] = useState<Option[]>([]);
  const [val2, setVal2] = useState<Option | null>(null);
  const [valList2, setValList2] = useState<Option[]>([]);

  const handleSelect1 = (option: Option | null) => {
    setVal1(option);
    if (option) {
      setValList1((prev) => {
        const exists = prev.some((val) => val.value === option.value);
        return exists ? prev : [...prev, option];
      });
    }
  };

  const handleSelect2 = (option: Option | null) => {
    setVal2(option);
    if (option) {
      setValList2((prev) => {
        const exists = prev.some((val) => val.value === option.value);
        return exists ? prev : [...prev, option];
      });
    }
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
        <div className={styles.chipContainer}>
          {valList1.map((val) => (
            <Chip
              key={val.value}
              text={val.label}
              handleDelete={() =>
                setValList1((prev) =>
                  prev.filter((item) => item.value !== val.value)
                )
              }
            />
          ))}
        </div>
      </div>
      <div>
        <Title size="medium" id={styles.title}>
          {title[1]}
        </Title>
        <div className={styles.selectbox}>
          <SelectBox options={options} onChange={handleSelect2} value={val2} />
        </div>
        <div className={styles.chipContainer}>
          {valList2.map((val) => (
            <Chip
              key={val.value}
              text={val.label}
              handleDelete={() =>
                setValList2((prev) =>
                  prev.filter((item) => item.value !== val.value)
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Double;
