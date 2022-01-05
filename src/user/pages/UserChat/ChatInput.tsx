import React, { FC, SyntheticEvent, useState } from 'react';
import socket from '@/services/socketService';

export const ChatInput: FC = () => {
  const [newMessage, setNewMessage] = useState<string>('');

  const writeMessage = (event: { target: { value: string } }): void => {
    setNewMessage(event.target.value);
  };
  const sendMessage = (event: SyntheticEvent): void => {
    event.preventDefault();
    socket.send(newMessage);
    setNewMessage('');
  };
  return (
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
  );
};
