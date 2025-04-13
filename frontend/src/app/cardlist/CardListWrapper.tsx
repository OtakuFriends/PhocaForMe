"use client";
import CardList from "@/containers/cardlist";
import { SearchParam } from "@/types";
import { useSearchParams } from "next/navigation";

const CardListPage = () => {
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") ?? "";
  const group = searchParams.get("group") ?? "";
  const cardType = searchParams.get("cardType") ?? "";
  const own = searchParams.getAll("own");
  const target = searchParams.getAll("target");

  const query: SearchParam = {
    keyword: keyword,
    group: group,
    own: own,
    target: target,
    cardType: cardType,
  };

  const hasAnySearchParam = [
    group,
    cardType,
    keyword,
    own?.length ? own : null,
    target?.length ? target : null,
  ].some(Boolean);

  if (!hasAnySearchParam) {
    return <CardList />;
  }

  // to do
  // group 없이 member만 있는 건 허용하지 않음

  //   const isGroupValid = typeof group === "string" && group.trim() !== "";
  //   const isOwnMemberValid = ownMember.length > 0;
  //   const isTargetMemberValid = targetMember.length > 0;
  //   const isKeywordValid = typeof keyword === "string" && keyword.trim() !== "";
  //   const isCardTypeValid =
  //     typeof cardType === "string" && cardType.trim() !== "";

  return <CardList query={query} />;
};

export default CardListPage;
