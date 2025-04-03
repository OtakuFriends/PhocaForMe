"use client";
import ChartContent from "@/components/Tabs/ChartContent";
import { useState, useEffect } from "react";

interface Idol {
  idolName: string;
  idolImage: string;
}

const ChartGirl = () => {
  const [rankGirl, setRankGirl] = useState<Idol[]>([]);

  useEffect(() => {
    setRankGirl([
      {
        idolName: "카리나",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fb40e8ab4-b913-42e7-9e9b-403033711a5d.jpg",
      },
      {
        idolName: "원영",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2F372ee972-f401-43ce-9559-cf88faf76329.jpg",
      },
      {
        idolName: "쥴리",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ft%2F95bf6338-1154-4eb5-ae64-4aa4e579932e.jpg",
      },
    ]);
  }, []);

  return <ChartContent rankData={rankGirl} />;
};

export default ChartGirl;
