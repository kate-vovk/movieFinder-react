import { FunctionComponent, useCallback, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { logout } from '@/user/store/slices/authSlice';
import { IUserMenuLinks } from '@/user/constants/menuButton';
import { CustomButton } from '@/user/components';
import { CLIENT_PATHS } from '@/user/constants';

interface IPropsMenu {
  menuLink: IUserMenuLinks[];
}

export const MenuButton: FunctionComponent<IPropsMenu> = ({ menuLink }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation(['UserMenu']);
  const history = useHistory();

  const goToLogOut = useCallback(() => {
    dispatch(logout());
  }, []);
  const goToUserChat = useCallback(() => {
    history.push(CLIENT_PATHS.userChat);
  }, []);
  const handleOpenMenu = (event: SyntheticEvent<HTMLButtonElement, any>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
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
        {menuLink.map((element: IUserMenuLinks) => (
          <MenuItem
            key={element.link}
            onClick={() => {
              history.push(element.link);
              handleCloseMenu();
            }}
          >
            {t(element.translate)}
          </MenuItem>
        ))}
        <MenuItem onClick={goToLogOut}>{t('signout')}</MenuItem>
        <MenuItem onClick={goToUserChat}>{t('userChat')}</MenuItem>
      </Menu>
    </div>
  );
};
