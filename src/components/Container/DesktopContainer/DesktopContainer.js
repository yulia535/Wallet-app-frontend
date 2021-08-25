import { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home'
import TimelineIcon from '@material-ui/icons/Timeline';

import Balance from '../../Balance';
import Currency from '../../Currency';
import Loading from '../../Loader';

import './DesktopContainer.scss';

const HomeDesktop = lazy(() =>
  import('../../Home/Desktop' /* webpackChunkName: "home-page" */),
);
const DiagramTab = lazy(() =>
  import('../../DiagramTab' /* webpackChunkName: "statistics-page" */),
);

const DesktopContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="background-ellipse">
        <div className="bg_filter">
          <div className="dashboard-top-container">
            <div className="home-wrap-desktop">
              <ul>
                <li className="icons-list">
                  <NavLink
                    to="/dashboard/home"
                    className="link"
                    activeClassName="active-link"
                  >
                    <HomeIcon fontSize="small" />
                    <span className="icons-title">Главная</span>
                  </NavLink>
                </li>

                <li className="icons-list">
                  <NavLink
                    to="/dashboard/statistics"
                    className="link"
                    activeClassName="active-link"
                  >
                    <TimelineIcon fontSize="small" />
                    <span className="icons-title">Статистика</span>
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
