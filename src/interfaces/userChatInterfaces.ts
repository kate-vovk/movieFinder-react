export interface IMessage {
  message: string;
  type: string;
  userId: string;
  userName: string;
}

export interface IChat {
  messages: IMessage[];
}
