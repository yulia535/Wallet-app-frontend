const MobileContainer = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="bg_filter">
          <ul className="icons">
            <li className="icons-item">
              {/* <NavLink
                to="/dashboard/home"
                className="link"
                activeClassName="active-link"
              > */}
              {/* </NavLink> */}
            </li>
            <li className="icons-item">
              {/* <NavLink
                to="/dashboard/statistics"
                className="link"
                activeClassName="active-link"
              > */}
              {/* <TimelineIcon fontSize="large" /> */}
              {/* </NavLink> */}
            </li>

            <li className="icons-item">
              {/* <NavLink
                to="/dashboard/currency"
                className="link"
                activeClassName="active-link"
              > */}
              {/* <MonetizationOnOutlinedIcon fontSize="large" /> */}
              {/* </NavLink> */}
            </li>
          </ul>

          {/* <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeMobile} />

              <Route path="/dashboard/statistics" component={Statistics} />

              <Route path="/dashboard/currency" component={Currency} />
            </Switch>
          </Suspense> */}
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
