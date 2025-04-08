"use client";
import { Option } from "@/types";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface Props {
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
}

const SelectBox = ({ options, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    onChange(option);
    setSearch("");
    setIsOpen(false);
  };

  const clearSelection = () => {
    onChange(null);
    setSearch("");
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.inputWrapper} onClick={() => setIsOpen(!isOpen)}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          value={value ? value.label : search}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange(null);
            setIsOpen(!isOpen);
          }}
          placeholder="선택하세요"
          readOnly={!!value}
        />
        {value && (
          <button onClick={clearSelection} className={styles.clear}>
            ✕
          </button>
        )}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={styles.item}
            >
              {option.label}
            </li>
          ))}
          {filteredOptions.length === 0 && (
            <li className={styles.noResult}>검색 결과 없음</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
