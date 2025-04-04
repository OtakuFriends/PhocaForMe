import { useState, useEffect } from "react";
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
  const [list, setList] = useState<Alarm[]>(alarmlist);

  useEffect(() => {
    setList(alarmlist); // 초기 데이터 설정
  }, [alarmlist]);

  const deleteAlarm = (id: number) => {
    setList((prevList) => prevList.filter((alarm) => alarm.id !== id));
  };

  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트될 때 삭제된 알람들 실제로 삭제
      console.log("실제 api 호출");
    };
  }, []);

  return (
    <div>
      {list.length == 0 ? (
        <div>알림없음</div>
      ) : (
        <div>
          {list.map((alarm) => (
            <Item key={alarm.id} {...alarm} deleteAlarm={deleteAlarm} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
