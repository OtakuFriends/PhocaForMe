import Item from "./Item";

interface ChatRoom {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visiterId: string;
  latestChat: number;
  ownerLatestChat: number;
  visitorLatestChat: number;
  createdAt: Date;
  readStatus: boolean;
  isDelete: boolean;
}

interface ChatList {
  chatList: ChatRoom[];
}

const List = ({ chatList }: ChatList) => {
  return (
    <div>
      {chatList.length == 0 ? (
        <div>진행중인 채팅 없음</div>
      ) : (
        <div>
          {chatList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
