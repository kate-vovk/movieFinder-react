import { FC, useEffect, useState } from 'react';
import socket from '@/services/socketService';
import { IReceivedMessage } from '@/interfaces/userChatInterfaces';
import { ChatInput } from './ChatInput';
import { ChatMessagesList } from './ChatMessagesList';
import './userChat.scss';

export const UserChat: FC = () => {
  const [messages, setMessages] = useState<IReceivedMessage[]>();

  useEffect(() => {
    socket.join();

    socket.getSocket().on('chat-broadcast', (messagesFromServer: IReceivedMessage[]) => {
      setMessages(messagesFromServer);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <ChatMessagesList messages={messages} />
      <ChatInput />
    </div>
  );
};
