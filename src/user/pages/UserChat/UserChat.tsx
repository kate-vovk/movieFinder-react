/* eslint-disable @typescript-eslint/no-unused-vars */
import { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { userIdSelector } from '@/user/store/selectors/auth';
import socket from '@/services/socketService';
import { IReceivedMessage } from '@/interfaces/userChatInterfaces';
import './userChat.scss';

export const UserChat: FunctionComponent = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<IReceivedMessage[]>();
  const userId = useSelector(userIdSelector);

  useEffect(() => {
    socket.join();

    socket.getSocket().on('chat-broadcast', (messagesFromServer: any) => {
      setMessages(messagesFromServer);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e: any): void => {
    e.preventDefault();
    socket.send(newMessage);
    setNewMessage('');
  };
  const writeMessage = (event: { target: { value: string } }): void => {
    setNewMessage(event.target.value);
  };
  return (
    <div className="container">
      <ul>
        {messages?.map((message) => (
          <li key={message.messageId}>
            {message.type === 'info' ? (
              <p className="info">
                {message.userName} {message.message}
              </p>
            ) : (
              <div>
                {userId !== message.userId && <div className="avatar" />}
                <div
                  className={classNames('message', {
                    myMessage: userId === message.userId,
                    anotherMessage: userId !== message.userId,
                  })}
                >
                  <h4>{message.userName}:</h4>
                  <p>{message.message}</p>
                </div>
              </div>
            )}

            {message.message}
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <div className="form">
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
      </form>
    </div>
  );
};
