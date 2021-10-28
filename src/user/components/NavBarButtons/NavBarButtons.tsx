import { FunctionComponent, useCallback, useState, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { logout } from '@/user/store/slices/authSlice';
import { IUserMenuLinks, userMenuLinks } from '@/user/constants/menuButton';
import { CustomButton } from '@/user/components';
import { userRoleSelector } from '@/user/store/selectors/auth';
import { CLIENT_PATHS } from '@/user/constants';

export const NavBarButtons: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation(['UserMenu']);
  const userRole = useSelector(userRoleSelector);
  const history = useHistory();

  const goToLogOut = useCallback(() => {
    dispatch(logout());
  }, []);

  const handleOpenMenu = (event: SyntheticEvent<HTMLButtonElement, any>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const renderMenuItems = (): JSX.Element[] => {
    return userRole === 1
      ? userMenuLinks.map((element: IUserMenuLinks) => (
          <MenuItem
            key={element.translate}
            onClick={() => {
              history.push(element.link);
              handleCloseMenu();
            }}
          >
            {t(element.translate)}
          </MenuItem>
        ))
      : userMenuLinks.reduce((acc: JSX.Element[], element: IUserMenuLinks) => {
          if (element.link !== CLIENT_PATHS.adminMovies) {
            return [
              ...acc,
              <MenuItem
                key={element.translate}
                onClick={() => {
                  history.push(element.link);
                  handleCloseMenu();
                }}
              >
                {t(element.translate)}
              </MenuItem>,
            ];
          }
          return acc;
        }, []);
  };

  return (
    <div>
      <CustomButton
        ariaControls="fade-menu"
        ariaHaspopup
        onClick={handleOpenMenu}
        name="accountCircleIcon"
        buttonType="button"
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleCloseMenu}
        TransitionComponent={Fade}
      >
        {renderMenuItems()}
        <MenuItem onClick={goToLogOut}>{t('signout')}</MenuItem>
      </Menu>
    </div>
  );
};
