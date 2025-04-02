"use client";

import { useRouter } from "next/navigation";
import "./index.css";

const Ad = () => {
  const router = useRouter();
  const goToAd = () => {};

  return (
    <div id="container">
      <div id="ad-area" onClick={goToAd}></div>
    </div>
  );
};

export default Ad;
