import { Suspense } from "react";
import CardListWrapper from "./CardListWrapper";

export default function CardListPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CardListWrapper />
    </Suspense>
  );
}
