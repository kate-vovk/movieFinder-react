/* eslint-disable camelcase */
import { io, Socket } from 'socket.io-client';
import { store } from '@/store';

interface IUserInfo {
  username: string;
  type: string;
}

class SocketioService {
  socket: Socket = io();

  info: IUserInfo[] = [];

  constructor() {
    this.info = [];
    this.socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`, {
      auth: {
        roomName: 'userChat12345',
      },
    });
  }

  getSocket(): Socket {
    return this.socket;
  }

  send(input: string | null): void {
    this.socket.emit('my-message', {
      message: input,
      userName: store.getState().auth.userName,
      userId: store.getState().auth.userId,
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.emit('leave', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
      });
    }
  }

  join(): void {
    if (this.socket) {
      this.socket.emit('join', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
      });
    }
  }
}

export default new SocketioService();
