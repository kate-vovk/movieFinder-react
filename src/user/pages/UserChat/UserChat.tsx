import { FunctionComponent, useEffect, useState } from 'react';
import SocketService from '@/services/socketService';

export const UserChat: FunctionComponent = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const socket = new SocketService();
  useEffect(() => {
    socket.setupSocketConnection();
    socket.join();
  }, [SocketService]);

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
