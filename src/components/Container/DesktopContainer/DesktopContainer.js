import Ballance from '../../Ballance';
import Currency from '../../Currency/Currency';
// import Loading from '../../Loader';

import './DesktopContainer.scss';

const DesktopContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="background-ellipse">
        <div className="bg_filter">
          <div className="dashboard-top-container">
            <div className="home-wrap-desktop">
              <ul>
                <li className="icons-list">
                  {/* <NavLink
                    to="/dashboard/home"
                    className="link"
                    activeClassName="active-link"
                  > */}
                  {/* </NavLink> */}
                </li>

                <li className="icons-list">
                  {/* <NavLink
                    to="/dashboard/statistics"
                    className="link"
                    activeClassName="active-link"
                  > */}
                  <span className="icons-title">Статистика</span>
                </li>
              </ul>

              <Ballance />
            </div>
            <Currency />
          </div>

          {/* <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeDesktop} />

              <Route path="/dashboard/statistics" component={Statistics} />
            </Switch>
          </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;
