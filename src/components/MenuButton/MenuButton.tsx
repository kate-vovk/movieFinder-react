import { FunctionComponent, MouseEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { logout } from '@/store/slices/authSlice';
import { IUserMenuLinks } from '@/constants/menuButton';

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

  const handleOpenMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpenMenu}>
        <AccountCircleIcon />
      </Button>
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
      </Menu>
    </div>
  );
};
