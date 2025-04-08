"use client";
import Title from "@/components/Title";
import styles from "./index.module.css";

import dynamic from "next/dynamic";
import { Option } from "@/types";
import { SingleValue } from "react-select";

interface Props {
  title: string;
  options: Option[];
  value: SingleValue<Option>;
  setValue: (v: SingleValue<Option>) => void;
}

const Single = ({ title, options, value, setValue }: Props) => {
  // const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: SingleValue<Option>) => {
    setValue(option);
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
        <SelectBox options={options} value={value} onChange={handleSelect} />
      </div>
    </div>
  );
};

export default Single;
