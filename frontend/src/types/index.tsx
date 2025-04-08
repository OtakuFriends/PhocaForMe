export interface Option {
  label: string;
  value: string;
}

export interface Chat {
  id: number;
  roomId: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
  senderId: string;
  imgCode: string;
}

export interface ChatInfo {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visitorId: string;
}

export interface ChatRoomType {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visitorId: string;
  latestChat: number;
  ownerLatestChat: number;
  visitorLatestChat: number;
  createdAt: Date;
  readStatus: boolean;
  isDelete: boolean;
}

export interface TopInfo {
  id: number;
  boardId: number;
  boardtitle: string;
  ownerId: string;
  visitorId: string;
}

export interface Card {
  boardId: number;
  title: string;
  content: string;
  cardType: string;
  status: number;
  bartered: number;
  groupId: number;
  createdDate: Date;
  lastModifiedDate: Date;
  userId: number;
  imageSrc: string;
  findId: number;
  ownId: number;
}

export interface Post {
  title: string;
  content: string;
  selectedGroup: Option | null;
  cardType: Option | null;
  ownMembers: Option[];
  targetMembers: Option[];
  images: string[];
}
