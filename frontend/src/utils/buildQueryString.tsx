import { SearchOption } from "@/types";

const buildQueryString = (query: SearchOption): string => {
  const params = new URLSearchParams();

  if (query.keyword && query.keyword.trim() !== "") {
    params.set("keyword", query.keyword);
  }

  if (query.group !== null) {
    params.set("group", query.group.value);
  }

  if (query.cardType !== null) {
    params.set("cardType", query.cardType.value);
  }

  if (query.own && query.own.length > 0) {
    query.own.forEach((val) => params.append("own", val.value));
  }

  if (query.target && query.target.length > 0) {
    query.target.forEach((val) => params.append("target", val.value));
  }

  return params.toString();
};

export default buildQueryString;
