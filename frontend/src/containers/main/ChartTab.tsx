import Tabs from "@/components/Tabs";
// import styles from "./index.module.css";

import Title from "@/components/Title";
import ChartBoy from "./ChartBoy";
import ChartGirl from "./ChartGirl";
const ChartTab = () => {
  return (
    <div>
      <Title size="large">오늘의 포포차트 📊</Title>
      <Tabs labels={["남자아이돌", "여자아이돌"]}>
        <ChartBoy />
        <ChartGirl />
      </Tabs>
    </div>
  );
};

export default ChartTab;
