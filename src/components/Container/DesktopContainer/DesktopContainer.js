import { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';

import Balance from '../../Balance';
import Currency from '../../Currency';
import Loading from '../../Loader';

import s from './DesktopContainer.module.css';

const HomeDesktop = lazy(() =>
  import('../../Home/Desktop' /* webpackChunkName: "home-page" */),
);
const DiagramTab = lazy(() =>
  import('../../DiagramTab' /* webpackChunkName: "statistics-page" */),
);

const DesktopContainer = () => {
  return (
    <div className={s.dashboardContainer}>
      <div className={s.backgroundEllipse}>
        <div className={s.bg_filter}>
          <div className={s.dashboardTopContainer}>
            <div className={s.homeWrapDesktop}>
              <ul>
                <li className={s.icons}>
                  <NavLink
                    to="/dashboard/home"
                    className={s.link}
                    activeClassName={s.active}
                  >
                    <HomeIcon fontSize="small" />
                    <span className={s.iconTitle}>Главная</span>
                  </NavLink>
                </li>

                <li className={s.icons}>
                  <NavLink
                    to="/dashboard/statistics"
                    className={s.link}
                    activeClassName={s.active}
                  >
                    <TimelineIcon fontSize="small" />
                    <span className={s.iconTitle}>Статистика</span>
                  </NavLink>
                </li>
              </ul>

              <Balance />
            </div>
            <Currency />
          </div>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeDesktop} />

              <Route path="/dashboard/statistics" component={DiagramTab} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;
