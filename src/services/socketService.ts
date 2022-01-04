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

  roomname = 'userChat12345';

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
      // roomname: this.roomname,
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.emit('leave', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
        // roomname: this.roomname,
      });
      // this.socket.disconnect();
    }
  }

  join(): void {
    if (this.socket) {
      this.socket.emit('join', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
        roomname: this.roomname,
      });
    }
  }
}

export default new SocketioService();
