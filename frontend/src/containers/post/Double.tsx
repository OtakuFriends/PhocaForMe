"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";
import { Option } from "@/types";
import Chip from "@/components/Chip";
import SelectBox from "@/components/Select";
import { useState } from "react";

interface Props {
  title: string[];
  options: Option[];
  own: Option[];
  target: Option[];
  setOwn: (v: Option[]) => void;
  setTarget: (v: Option[]) => void;
}

const Double = ({ title, options, own, target, setOwn, setTarget }: Props) => {
  const [val1, setVal1] = useState<Option | null>(null);
  const [val2, setVal2] = useState<Option | null>(null);

  const handleSelect1 = (option: Option | null) => {
    setVal1(option);
    if (option) {
      const exists = own.some((val) => val.value === option.value);
      if (!exists) {
        setOwn([...own, option]);
      }
    }
  };

  const handleSelect2 = (option: Option | null) => {
    setVal2(option);
    if (option) {
      const exists = target.some((val) => val.value === option.value);
      if (!exists) {
        setTarget([...target, option]);
      }
    }
  };

  return (
    <div id={styles.double}>
      <div className={styles.memberContainer}>
        <Title size="medium" id={styles.title}>
          {title[0]}
        </Title>
        <SelectBox options={options} onChange={handleSelect1} value={val1} />
        <div className={styles.chipContainer}>
          {own.map((val) => (
            <Chip
              key={val.value}
              text={val.label}
              handleDelete={() => {
                setOwn(own.filter((v) => v.value !== val.value));
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.memberContainer}>
        <Title size="medium" id={styles.title}>
          {title[1]}
        </Title>
        <SelectBox options={options} onChange={handleSelect2} value={val2} />
        <div className={styles.chipContainer}>
          {target.map((val) => (
            <Chip
              key={val.value}
              text={val.label}
              handleDelete={() => {
                setTarget(target.filter((v) => v.value !== val.value));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Double;
