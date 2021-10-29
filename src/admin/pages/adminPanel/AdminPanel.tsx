import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CLIENT_PATHS } from '@/admin/constants';
import { useStyles } from './styles';

export const AdminPanel: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();

  const allTabs = [
    { label: 'All users', value: `${CLIENT_PATHS.adminUsers}` },
    { label: 'All movies', value: `${CLIENT_PATHS.adminMovies}` },
    { label: 'Site settings', value: `${CLIENT_PATHS.adminSettings}` },
  ];
  return (
    <>
      <h1 className={classes.title}>{t('adminPanel')}</h1>
      <ul className={classes.block}>
        {allTabs.map((item) => (
          <li className={classes.list} key={item.value}>
            <NavLink to={item.value} className={classes.link} activeClassName={classes.active}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
