import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Media from 'react-media';

import MobileContainer from '../Container/MobilContainer';
import DesktopContainer from '../Container/DesktopContainer';

const DashBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  return (
    <>
      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 767px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && <MobileContainer />}

              {matches.medium && (
                <>
                  <Redirect to="/home" />
                  <DesktopContainer />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    </>
  );
};
export default DashBoardPage;
