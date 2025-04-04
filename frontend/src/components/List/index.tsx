"use client";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import Item from "./Item";

interface Alarm {
  id: number;
  userId: string; // 알림 주체
  title: string;
  content: string;
  createdAt: Date;
  readStatus: boolean;
  deleteStatus: boolean;
  type: "Chatting" | "Article";
  articleId: number;
}

interface Props {
  alarmlist: Alarm[];
}

const List = ({ alarmlist }: Props) => {
  const router = useRouter();
  const goToDetail = (articleId: number) => {
    router.push("/carddetail/" + articleId);
  };
  const goToChat = () => {
    router.push("/chatlist");
  };

  return (
    <div id={styles.container}>
      {alarmlist.map((alarm: Alarm) => (
        <div
          key={alarm.id}
          onClick={() =>
            alarm.type === "Chatting" ? goToChat() : goToDetail(alarm.articleId)
          }
        >
          <Item {...alarm} />
        </div>
      ))}
    </div>
  );
};

export default List;
