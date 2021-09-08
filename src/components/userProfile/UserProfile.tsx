import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '@/selectors/auth';
import { UserProfileBody } from './userProfileBody/UserProfileBody';
import { UserProfileNav } from './userProfileNav/UserProfileNav';
import { useStyle } from './styles';

export const UserProfile: FunctionComponent = () => {
  const { id: userId } = useSelector(userSelector);
  const classes = useStyle();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.columnLeft}>
          <UserProfileNav />
        </div>
        <UserProfileBody userId={userId} />
      </div>
    </div>
  );
};
