"use client";

import CardDetail from "@/containers/carddetail";
import { useParams } from "next/navigation";

const CardDetailPage = () => {
  const { cardId } = useParams() as { cardId: string };
  const parsedCardId = parseInt(cardId, 10); // 숫자로 변환

  return <CardDetail cardId={parsedCardId} />;
};

export default CardDetailPage;
