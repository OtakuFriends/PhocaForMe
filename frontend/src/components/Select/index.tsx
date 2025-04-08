"use client";
import "@/styles/globals.css";
import { Option } from "@/types";
import Select from "react-select";

interface Props {
  options: Option[];
  onChange: (option: Option | null) => void;
  value: Option | null;
}

const SelectBox = ({ options, onChange, value }: Props) => {
  return (
    <Select
      classNamePrefix="selectBox"
      options={options}
      onChange={onChange}
      value={value}
      isSearchable
      placeholder="선택하세요"
      components={{ IndicatorSeparator: () => null }}
    />
  );
};

export default SelectBox;
