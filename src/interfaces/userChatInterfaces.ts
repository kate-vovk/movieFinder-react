export interface IMessage {
  message: string;
  type: string;
  userId: string;
  userName: string;
}

export interface IChat {
  messages: IMessage[];
}
export interface IReceivedMessage extends IMessage {
  messageId: string;
  createdAt: string;
}
