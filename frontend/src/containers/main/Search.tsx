import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import styles from "./index.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Title size="medium" id={styles.searchTitle}>
        어떤 포토카드를 찾으시나요?
      </Title>
      <SearchBar />
    </div>
  );
};

export default Search;
