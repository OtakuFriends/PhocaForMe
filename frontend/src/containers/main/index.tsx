import ChartTab from "./ChartTab";
import Search from "@/components/Search";
import styles from "./index.module.css";
import CardList from "./CardList";

const Main = () => {
  return (
    <div id={styles.container}>
      <Search />
      <ChartTab />
      <CardList />
    </div>
  );
};

export default Main;
