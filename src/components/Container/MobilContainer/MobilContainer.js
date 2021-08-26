import { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import Loading from '../../Loader';

import s from '../../Container/DesktopContainer/DesktopContainer.module.css';
import style from '../../Container/MobilContainer/MobilContainer.module.css';

const useStyles = makeStyles({
  root: {
    color: '#FFFF',
    backgroundColor: '#4A56E2',
    borderRadius: '5px',
    '&:hover, &:focus': {
      transition: 'background-color 250ms linear',
      backgroundColor: '#6E78E8',
    },
  },
});

const HomeMobile = lazy(() =>
  import('../../Home/Mobile' /* webpackChunkName: "home-page" */),
);

const Statistics = lazy(() =>
  import(
    '../../HomeTab/TransactionHistory/TransactionHistory.jsx' /* webpackChunkName: "statistics-page" */
  ),
);

const Currency = lazy(() =>
  import(
    '../../Currency' /*
  webpackChunkName: "currency-page" */
  ),
);

const MobileContainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={s.dashboardContainer}>
        <div className={s.bg_filter}>
          <ul className={style.icons}>
            <li className={style.iconsItem}>
              <NavLink
                to="/dashboard/home"
                className={style.link}
                activeClassName={style.active}
              >
                <HomeIcon fontSize="large" className={classes.root} />
              </NavLink>
            </li>
            <li className={style.iconsItem}>
              <NavLink
                to="/dashboard/statistics"
                className={style.link}
                activeClassName={style.active}
              >
                <TimelineIcon fontSize="large" className={classes.root} />
              </NavLink>
            </li>

            <li className={style.iconsItem}>
              <NavLink
                to="/dashboard/currency"
                className={style.link}
                activeClassName={style.active}
              >
                <AttachMoneyIcon fontSize="large" className={classes.root} />
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeMobile} />

              <Route path="/dashboard/statistics" component={Statistics} />

              <Route path="/dashboard/currency" component={Currency} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
