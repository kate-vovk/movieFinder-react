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

  userName: string = store.getState().auth.userName;

  userId: string = store.getState().auth.userId;

  roomname = 'userChat12345';

  constructor() {
    this.info = [];
    this.socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`, {
      auth: { userName: 'this.store.userName', userId: 'this.store.userId' },
    });
    // this.userName = store.getState().auth.userName;
    // this.userId = store.getState().auth.userId;
  }

  getSocket(): Socket {
    return this.socket;
  }

  send(input: string | null): void {
    console.warn('store', store.getState().auth, store.getState().auth.userName, this.userName);
    this.socket.emit('my-message', {
      message: input,
      userName: store.getState().auth.userName,
      userId: store.getState().auth.userId,
      roomname: this.roomname,
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.emit('leave', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
        roomname: this.roomname,
      });
      this.socket.disconnect();
    }
  }

  join(): void {
    if (this.socket) {
      console.log('join');
      this.socket.emit('join', {
        userName: store.getState().auth.userName,
        userId: store.getState().auth.userId,
        roomname: this.roomname,
      });
    }
  }
}

export default new SocketioService();
