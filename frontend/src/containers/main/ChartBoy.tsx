"use client";
import ChartContent from "@/components/Tabs/ChartContent";
import { useState, useEffect } from "react";

interface Idol {
  idolName: string;
  idolImage: string;
}

const ChartBoy = () => {
  const [rankBoy, setRankBoy] = useState<Idol[]>([]);

  useEffect(() => {
    setRankBoy([
      {
        idolName: "도영",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fadc8f747-a751-437d-a063-915bc27cf424.jpg",
      },
      {
        idolName: "재현",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Ff2cef043-501b-4f25-b1a7-958784b47c9f.jpg",
      },
      {
        idolName: "정우",
        idolImage:
          "https://search.pstatic.net/common?type=b&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2F497103cb-810e-4ce7-8375-7514b8aa5aad.jpg",
      },
    ]);
  }, []);

  return <ChartContent rankData={rankBoy} />;
};

export default ChartBoy;
