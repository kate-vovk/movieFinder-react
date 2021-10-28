import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

export const AdminPanel: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();

  const allTabs = [
    { label: 'All users', value: 'users' },
    { label: 'All movies', value: 'movies' },
    { label: 'Site settings', value: 'settings' },
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
