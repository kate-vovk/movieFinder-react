import { FunctionComponent } from 'react';

interface IUserProfileBodyProps {
  userId: string;
}

export const UserProfileBody: FunctionComponent<IUserProfileBodyProps> = ({ userId }) => {
  return (
    <div>
      <h1>{`User ${userId} body`}</h1>
    </div>
  );
};
