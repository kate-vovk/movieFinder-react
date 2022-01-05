import { FC } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { userIdSelector } from '@/user/store/selectors/auth';
import { IReceivedMessage } from '@/interfaces/userChatInterfaces';

interface IChatMessagesList {
  messages?: IReceivedMessage[];
}

export const ChatMessagesList: FC<IChatMessagesList> = ({ messages }) => {
  const userId = useSelector(userIdSelector);

  return (
    <ul>
      {messages?.map((message: IReceivedMessage) => (
        <li key={message.messageId}>
          <div>
            {message.type === 'info' ? (
              <p className="info">
                {message.userName} {message.message}
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
