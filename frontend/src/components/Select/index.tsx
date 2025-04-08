"use client";
import "@/styles/globals.css";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

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
