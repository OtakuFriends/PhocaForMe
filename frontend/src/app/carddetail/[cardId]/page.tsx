"use client";
import { useParams } from "next/navigation";

const CardDetail = () => {
  const { cardId } = useParams();
  return <h1>{cardId} 아이디의 카드</h1>;
};

export default CardDetail;
