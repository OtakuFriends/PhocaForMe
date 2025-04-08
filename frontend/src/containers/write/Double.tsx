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
  own: Option[];
  target: Option[];
  setOwn: (v: Option[]) => void;
  setTarget: (v: Option[]) => void;
}

const Double = ({ title, options, own, target, setOwn, setTarget }: Props) => {
  const SelectBox = dynamic(() => import("@/components/Select"), {
    ssr: false,
  });

  const [val1, setVal1] = useState<Option | null>(null);
  // const [valList1, setValList1] = useState<Option[]>([]);
  const [val2, setVal2] = useState<Option | null>(null);
  // const [valList2, setValList2] = useState<Option[]>([]);

  const handleSelect1 = (option: Option | null) => {
    if (option) {
      setVal1(option);
      const exists = own.some((val) => val.value === option.value);
      if (!exists) {
        setOwn([...own, option]);
      }
    }
  };

  const handleSelect2 = (option: Option | null) => {
    if (option) {
      setVal2(option);
      const exists = target.some((val) => val.value === option.value);
      if (!exists) {
        setTarget([...target, option]);
      }
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
      <div>
        <Title size="medium" id={styles.title}>
          {title[1]}
        </Title>
        <div className={styles.selectbox}>
          <SelectBox options={options} onChange={handleSelect2} value={val2} />
        </div>
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
