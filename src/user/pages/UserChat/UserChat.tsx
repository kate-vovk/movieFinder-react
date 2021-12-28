import { FunctionComponent, useEffect, useState } from 'react';
import socket from '@/services/socketService';
import { IMessage } from '@/interfaces/userChatInterfaces';
import { getUserChatComments, addUserChatComments } from '@/user/businessLogic/userChat';

export const UserChat: FunctionComponent = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>();
  // const socket = new SocketService();
  console.warn('comments:', messages);

  useEffect(() => {
    console.warn('useEffect');
    // socket.setupSocketConnection();
    socket.getSocket().on('chat-broadcast', ({ message, type, userId, userName }: IMessage) => {
      console.log('chat-broadcast', message, type, userId, userName);
      addUserChatComments({ message, type, userId, userName }).then(() => {
        getUserChatComments().then((data: IMessage[]) => {
          setMessages(data);
        });
      });

      //   globalStore.dispatch(UserChatActionTypes.PUSH_NEW_MESSAGE, {
      //     message,
      //     type,
      //     userId,
      //     userName,
      //   });
    });

    socket.getSocket().on('joined', ({ userId, userName, type, message }: IMessage) => {
      console.log('chat-broadcast', message, type, userId, userName);
      //   const prevMessage =
      //     globalStore.state.userChat.messages[globalStore.state.userChat.messages.length - 1];
      //   if (
      //     !(
      //       prevMessage.type === type &&
      //       prevMessage.message === message &&
      //       prevMessage.userId === userId
      //     )
      //   ) {
      // globalStore.dispatch(UserChatActionTypes.PUSH_NEW_MESSAGE, {
      //   message,
      //   type,
      //   userId,
      //   userName,
      // });
      //   }
    });

    socket.getSocket().on('left', ({ userId, userName, type, message }: IMessage) => {
      console.log('chat-broadcast', message, type, userId, userName);
      //   globalStore.dispatch(UserChatActionTypes.PUSH_NEW_MESSAGE, {
      //     message,
      //     type,
      //     userId,
      //     userName,
      //   });
    });
    socket.join();
  }, []);

  const sendMessage = (): void => {
    socket.send(newMessage);
    setNewMessage('');
  };
  const writeMessage = (event: { target: { value: string } }): void => {
    setNewMessage(event.target.value);
  };
  return (
    <div>
      <input
        className="messageInput"
        type="text"
        placeholder="Enter message here"
        value={newMessage}
        onChange={writeMessage}
      />
      <button className="sendButton" disabled={!newMessage} type="button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
