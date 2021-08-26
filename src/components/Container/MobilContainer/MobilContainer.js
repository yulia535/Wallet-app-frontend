import { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import Loading from '../../Loader';

import s from '../../Container/DesktopContainer/DesktopContainer.module.css';
import style from '../../Container/DesktopContainer/DesktopContainer.module.css';

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
  return (
    <>
      <div className={s.dashboardContainer}>
        <div className={s.bg_filter}>
          <ul className={style.icons}>
            <li className={style.iconsItem}>
              <NavLink
                to="/home"
                className={style.link}
                activeClassName={style.active}
              >
                <HomeIcon fontSize="large" />
              </NavLink>
            </li>
            <li className={style.iconsItem}>
              <NavLink
                to="/diagram"
                className={style.link}
                activeClassName={style.active}
              >
                <TimelineIcon fontSize="large" />
              </NavLink>
            </li>

            <li className={style.iconsItem}>
              <NavLink
                to="/currency"
                className={style.link}
                activeClassName={style.active}
              >
                <MonetizationOnOutlinedIcon fontSize="large" />
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/home" component={HomeMobile} />

              <Route path="/diagram" component={Statistics} />

              <Route path="/currency" component={Currency} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
