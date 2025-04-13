"use client";
import { Dropdown, Search } from "#/svgs";
import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log("검색 실행:", query);
    // to do
    // 쿼리 url 형식으로 수정하기
    router.push("/cardlist");
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
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        ></input>
      </form>
      <Dropdown />
    </div>
  );
};

export default SearchBar;
