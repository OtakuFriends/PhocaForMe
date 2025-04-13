"use client";
import { Dropdown, Search } from "#/svgs";
import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import Single from "@/containers/post/Single";
import { groupOption } from "@/constants/groupOption";
import { Option, SearchOption } from "@/types";
import buildQueryString from "@/utils/buildQueryString";
import Double from "@/containers/post/Double";
import { memberOption } from "@/constants/memberOption";
import { cardOptions } from "@/constants/cardOption";
import Button from "../Button";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<SearchOption>({
    keyword: "",
    group: null,
    own: [],
    target: [],
    cardType: null,
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({
      ...prev,
      keyword: event.target.value,
    }));
  };

  const handleGroup = (val: Option | null) => {
    setQuery((prev) => ({
      ...prev,
      group: val,
    }));
  };

  const handleOwn = (val: Option[]) => {
    setQuery((prev) => ({
      ...prev,
      own: val,
    }));
  };

  const handleTarget = (val: Option[]) => {
    setQuery((prev) => ({
      ...prev,
      target: val,
    }));
  };

  const handleCardType = (val: Option | null) => {
    setQuery((prev) => ({
      ...prev,
      cardType: val,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log("검색 실행:", query);
    router.push(`/cardlist?${buildQueryString(query)}`);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Search />
      <form
        id={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          id={styles.searchInput}
          placeholder="앨범, 버전명 등을 입력해주세요."
          type="text"
          value={query.keyword}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        ></input>
      </form>
      <div className={styles.dropdown} onClick={() => setOpen(!open)}>
        <Dropdown />
      </div>

      {/* 검색창 확장 */}
      {open && (
        <div className={styles.overlay}>
          <Single
            title="그룹명"
            options={groupOption}
            value={query.group}
            setValue={handleGroup}
          />
          <Double
            title={["보유한 멤버", "찾는 멤버"]}
            options={memberOption}
            own={query.own}
            target={query.target}
            setOwn={handleOwn}
            setTarget={handleTarget}
          />
          <Single
            title="포토카드 종류"
            options={cardOptions}
            value={query.cardType}
            setValue={handleCardType}
          />
          <div className={styles.button}>
            <Button size="large" content="검색" action={handleSearch} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
